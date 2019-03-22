import React from 'react';
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry,
  WindowScroller
} from 'react-virtualized';
import { withContext } from '../../context';
import Splash from '../../components/Splash';

class Photos extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this._columnCount = 0;

    this._cache = new CellMeasurerCache({
      defaultHeight: 250,
      defaultWidth: 200,
      fixedWidth: true
    });

    this.state = {
      columnWidth: Math.floor(window.screen.width / 3.5),
      height: window.screen.height,
      gutterSize: 30,
      overscanByPixels: 0,
      windowScrollerEnabled: true
    };
  }

  _calculateColumnCount() {
    const { columnWidth, gutterSize } = this.state;

    this._columnCount = Math.floor(this._width / (columnWidth + gutterSize));
  }

  _cellRenderer = ({ index, key, parent, style }) => {
    const { photos } = this.props.contextState;
    const { columnWidth } = this.state;

    const item = photos[index];
    const rowHeight = columnWidth * (item.height / item.width);
    const containerStyle = {
      ...style,
      backgroundColor: item.color,
      height: rowHeight,
      width: columnWidth
    };

    return (
      <CellMeasurer cache={this._cache} index={index} key={key} parent={parent}>
        <div style={containerStyle}>
          <Splash height={rowHeight} src={item.urls.regular} />
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
      <Masonry
        autoHeight={windowScrollerEnabled}
        cellCount={this.props.contextState.photos.length}
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

export default withContext(Photos);
