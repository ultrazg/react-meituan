import React from 'react';

// 根据分数生成数组
const STAR_LENGTH = 5;
const EMPTY = 'icon-star-empty';
const FULL = 'icon-star-full';
const HALF = 'icon-star-half';

function createStarArray(score) {
  let arr = [];
  // 对评分做一次处理，3.0-3.4分以下变成3分，3.5-3.9分以上成为3.5分
  score = Math.floor(score * 2) / 2;

  for (let index = 0; index < STAR_LENGTH; index++) {
    // 0 1 2 3 4
    //主要拿3分和3.5分来比较
    if (index < Math.floor(score)) {//全星
      arr.push(FULL);
    } else if (index < score && index === Math.floor(score)) {//半星
      arr.push(HALF);
    } else {//空星
      arr.push(EMPTY);
    }
  }
  return arr;
}

function Star({ score }) {
  let star = createStarArray(score);
  return (
    <>
      {
        star.map((item, index) => <span key={index} className={item} />)
      }
    </>
  );
}

export default Star;