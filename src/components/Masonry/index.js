import React from 'react';
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry as RVMasonry,
  WindowScroller
} from 'react-virtualized';

import Splash from '../../components/Splash';
import { withContext } from '../../context';

class Masonry extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      columnWidth: Math.floor(window.screen.width / 3.5),
      height: window.screen.height,
      gutterSize: 30,
      overscanByPixels: 0,
      windowScrollerEnabled: true,
      loadMore: true
    };
    this._cache = new CellMeasurerCache({
      defaultHeight: 250,
      defaultWidth: 200,
      fixedWidth: true
    });
    this._columnCount = 0;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleOnScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleOnScroll);
  }

  handleOnScroll = async () => {
    const { onBottomFired } = this.props;
    const d = document.documentElement;
    const offset = d.scrollTop + window.innerHeight;
    const height = d.offsetHeight;

    if (height - offset <= 150) {
      if (this.props.isLoading) return;
      await onBottomFired();
      console.log('loading more items..!');
    }
  };

  _calculateColumnCount = () => {
    const { columnWidth, gutterSize } = this.state;

    this._columnCount = Math.floor(this._width / (columnWidth + gutterSize));
  };

  _cellRenderer = ({ index, key, parent, style }) => {
    const { photos } = this.props;
    const { columnWidth } = this.state;

    const splash = photos[index];
    const rowHeight = columnWidth * (splash.height / splash.width);
    const containerStyle = {
      ...style,
      backgroundColor: splash.color,
      height: rowHeight,
      width: columnWidth
    };

    return (
      <CellMeasurer cache={this._cache} index={index} key={key} parent={parent}>
        <div style={containerStyle}>
          <Splash height={rowHeight} splash={splash} />
        </div>
      </CellMeasurer>
    );
  };

  _initCellPositioner = () => {
    if (typeof this._cellPositioner === 'undefined') {
      const { columnWidth, gutterSize } = this.state;

      this._cellPositioner = createMasonryCellPositioner({
        cellMeasurerCache: this._cache,
        columnCount: this._columnCount,
        columnWidth,
        spacer: gutterSize
      });
    }
  };

  _onResize = ({ width }) => {
    this._width = width;

    this._calculateColumnCount();
    this._resetCellPositioner();
    this._masonry.recomputeCellPositions();
  };

  _renderAutoSizer = ({ height, scrollTop }) => {
    this._height = height;
    this._scrollTop = scrollTop;

    const { overscanByPixels } = this.state;

    return (
      <AutoSizer
        disableHeight
        height={height}
        onResize={this._onResize}
        overscanByPixels={overscanByPixels}
        scrollTop={this._scrollTop}
      >
        {this._renderMasonry}
      </AutoSizer>
    );
  };

  _renderMasonry = ({ width }) => {
    this._width = width;

    this._calculateColumnCount();
    this._initCellPositioner();

    const { height, overscanByPixels, windowScrollerEnabled } = this.state;

    return (
      <RVMasonry
        autoHeight={windowScrollerEnabled}
        cellCount={this.props.cellCount}
        cellMeasurerCache={this._cache}
        cellPositioner={this._cellPositioner}
        cellRenderer={this._cellRenderer}
        height={height}
        overscanByPixels={overscanByPixels}
        ref={this._setMasonryRef}
        scrollTop={this._scrollTop}
        width={width}
      />
    );
  };

  _resetCellPositioner = () => {
    const { columnWidth, gutterSize } = this.state;

    this._cellPositioner.reset({
      columnCount: this._columnCount,
      columnWidth,
      spacer: gutterSize
    });
  };

  _setMasonryRef = ref => {
    this._masonry = ref;
  };

  render() {
    const { overscanByPixels } = this.state;

    return (
      <WindowScroller overscanByPixels={overscanByPixels}>
        {this._renderAutoSizer}
      </WindowScroller>
    );
  }
}

export default withContext(Masonry);
