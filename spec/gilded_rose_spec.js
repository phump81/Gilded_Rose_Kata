var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("normal items degrade by 1 after 1 day", function() {
    const gildedRose = new Shop([ new Item("foo", 5, 5) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(4);
    expect(items[0].sellIn).toEqual(4);
  });

  it("once sellIn hits zero, quality degrades twice as fast", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 6) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(4);
  })

  it("the quality of an item is never negative", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  })

  it("Aged Brie increases in quality after 1 day", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 5, 5) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(6);
    expect(items[0].sellIn).toEqual(4);
  })

  it("the quality of an item is never more than 50", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 5, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  })

  it("Sulfuras does not degrade", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 5, 5) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(5);
    expect(items[0].sellIn).toEqual(5);
  })

  it("backstage pass quality increases by 1 when sellIn is more than 10 days", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 11, 5) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(6);
    expect(items[0].sellIn).toEqual(10);
  })

  it("backstage pass quality increases by 2 when sellIn in 10 days or less", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 5) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(7);
    expect(items[0].sellIn).toEqual(9);
  })

  it("backstage pass quality increases by 3 when sellIn in 5 days or less", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 5) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(8);
    expect(items[0].sellIn).toEqual(4);
  })

  it("backstage passes quality drops to zero when sellIn is 0", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 5) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  })

});
