'use strict';

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name === 'Aged Brie') {
        this.updateBrie(this.items[i]);
      } else if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
        this.updatePasses(this.items[i]);
      } else if (this.items[i].name.includes('Conjured')) {
        this.updateConjured(this.items[i]);
      } else if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.updateNormal(this.items[i]);
      }
      this.updateSellIn(this.items[i]);
    }
    return this.items;
  }
  updateBrie(item) {
    if (item.quality < 50) {
      item.quality += 1;
    }
  }
  updatePasses(item) {
    if (item.sellIn > 10) {
      item.quality += 1;
    } else if (item.sellIn < 11 && item.sellIn > 5) {
      item.quality += 2;
    } else if (item.sellIn < 6 && item.sellIn > 0) {
      item.quality += 3;
    } else {
      item.quality = 0
    }
    if (item.quality > 50){
      item.quality = 50;
    }
  }
  updateConjured(item) {
    if (item.sellIn > 0) {
      item.quality -= 2;
    } else {
      item.quality -= 4;
    }
    if (item.quality < 0){
      item.quality = 0;
    }
  }
  updateNormal(item) {
    if (item.sellIn > 0) {
      item.quality -= 1;
    } else {
      item.quality -= 2;
    }
    if (item.quality < 0){
      item.quality = 0;
    }
  }
  updateSellIn(item) {
    if (item.name != 'Sulfuras, Hand of Ragnaros') {
      item.sellIn -= 1;
    }
  }
}
module.exports = {
  Shop
}
