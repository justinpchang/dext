import React, { PropTypes } from 'react';
import { style, compose, hover } from 'glamor';
import ResultItemSchema from '../schema/ResultItemSchema';

const base = compose(
  style({
    display: 'flex',
    boxSizing: 'border-box',
    height: 60,
    margin: 0,
    padding: 10,
    width: '100%',
  }),
  hover({
    backgroundColor: '#ededed',
  })
);

const icon = style({
  flex: 'content',
  boxSizing: 'border-box',
  marginRight: 10,
});

const iconImg = style({
  maxWidth: 40,
  maxHeight: 40,
});

const details = style({
  flex: 'flex-grow',
  boxSizing: 'border-box',
});

const title = style({
  boxSizing: 'border-box',
  fontSize: 20,
  fontWeight: 'normal',
  margin: 0,
});

const subtitle = style({
  boxSizing: 'border-box',
  fontSize: 16,
  fontWeight: 'normal',
  margin: 0,
});

const ResultItem = ({ theme, selected, item, onDoubleClick }) => {
  let baseSelected = {};
  if (selected) {
    baseSelected = style({
      backgroundColor: '#ededed',
    });
  }

  return (
    <li {...compose(base, theme.result, baseSelected)} onDoubleClick={onDoubleClick}>
      <div {...icon}>
        <img {...iconImg} src={item.icon.path} role="presentation" />
      </div>
      <div {...details}>
        <h2 {...compose(title, theme.resultTitle)}>{item.title}</h2>
        <h3 {...compose(subtitle, theme.resultSubtitle)}>{item.subtitle}</h3>
      </div>
    </li>
  );
};

ResultItem.propTypes = {
  theme: PropTypes.object,
  // item prop should follow the Alfred workflow script filter JSON format
  // https://www.alfredapp.com/help/workflows/inputs/script-filter/json/
  item: ResultItemSchema,
  selected: PropTypes.bool,
  onDoubleClick: PropTypes.func,
};

export default ResultItem;
