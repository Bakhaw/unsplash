import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import GalleryAPI from '../../api/gallery';
import Loader from '../../components/Loader';
import Masonry from '../../components/Masonry';

const Wrapper = styled.div`
  padding: 20px 40px;
`;

const Title = styled.h1`
  text-transform: capitalize;
  font-size: 46px;
  color: #111;
`;

const StatsWrapper = styled.div`
  display: flex;
`;

const Stat = styled.h2`
  cursor: pointer;
  text-transform: capitalize;
  color: ${(props) => (props.activePath ? '#111' : '#999')};
  font-weight: 500;
  font-size: 18px;
  margin-right: 20px;
  &:hover {
    color: #111;
  }
`;

class Search extends Component {
  state = {
    isLoading: false,
    currentPage: 1,
    collections: [],
    photos: [],
    users: [],
    stats: {
      photos: null,
      collections: null,
      users: null,
    },
  };

  async componentDidMount() {
    await this.getData('photos');
    await this.getData('collections');
    await this.getData('users');
  }

  setLoading = (isLoading) => this.setState({ isLoading });

  getData = async (dataType) => {
    await this.setLoading(true);

    const { search } = GalleryAPI.methods.global;
    const { searchQuery } = this.props.match.params;

    const newData = await search(dataType, searchQuery, this.state.currentPage);

    if (!newData) return;

    await this.setState((prevState) => ({
      currentPage: prevState.currentPage + 1,
      [dataType]: [...prevState[dataType], ...newData.results],
      stats: {
        ...prevState.stats,
        [dataType]: newData.total,
      },
      isLoading: false,
    }));
  };

  formatStats = (stats) => {
    // ty https://stackoverflow.com/a/40724354 <3
    const SI_SYMBOL = ['', 'k', 'M', 'G', 'T', 'P', 'E'];

    const tier = (Math.log10(stats) / 3) | 0;

    if (tier === 0) return stats;

    const suffix = SI_SYMBOL[tier];
    const scale = Math.pow(10, tier * 3);
    const scaled = stats / scale;

    return scaled.toFixed(1) + suffix;
  };

  render() {
    const { isLoading, photos, stats } = this.state;
    const { searchQuery, searchType } = this.props.match.params;

    // if (photos.length === 0 || this.state.collections.length === 0 || this.state.users.length === 0)
    //   return <Loader wrapperHeight='fullscreen' />;

    if (photos.length === 0) return <Loader wrapperHeight='fullscreen' />;

    return (
      <Wrapper>
        <Title>{searchQuery}</Title>
        <StatsWrapper>
          {Object.keys(stats).map((stat, index) => (
            <Link key={`stat-${index}`} to={`/search/${stat}/${searchQuery}`}>
              <Stat activePath={searchType === stat}>
                {this.formatStats(stats[stat])} {stat}
              </Stat>
            </Link>
          ))}
        </StatsWrapper>
        <Masonry
          cellCount={photos.length}
          isLoading={isLoading}
          onBottomFired={() => this.getData('photos')}
          photos={photos}
        />
      </Wrapper>
    );
  }
}

export default Search;
