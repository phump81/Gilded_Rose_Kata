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

});
