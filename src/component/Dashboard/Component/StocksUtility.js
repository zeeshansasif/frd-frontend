export class StocksUtility {
  constructor(intervalDays = 1, intervalHours = 0, intervalMinutes = 0, priceStart = 200, priceRange = 1, volumeRange = 1000, volumeStart = 20000000) {
    this.intervalDays = intervalDays;
    this.intervalHours = intervalHours;
    this.intervalMinutes = intervalMinutes;
    this.priceStart = priceStart;
    this.priceRange = priceRange;
    this.volumeRange = volumeRange;
    this.volumeStart = volumeStart;
  }

  static GetStocksFrom(dateEnd, years) {
    const dateStart = this.AddYears(dateEnd, -years);
    return this.GetStocksBetween(dateStart, dateEnd);
  }

  static GetStocksItems(points) {
    this.intervalDays = 0;
    this.intervalHours = 1;
    this.intervalMinutes = 0;

    const today = new Date();
    const year = today.getFullYear();
    const dateEnd = new Date(year, 11, 1);
    const dateStart = this.AddHours(dateEnd, -points);
    return this.GetStocksBetween(dateStart, dateEnd);
  }

  static GetStocksBetween(dateStart, dateEnd) {
    var intervalDays = 1, intervalHours = 0, intervalMinutes = 0, priceStart = 200, priceRange = 1, volumeRange = 1000, volumeStart = 20000000
    // let interval = this.intervalDays * 24 * 60;
    let interval = 1 * 24 * 60;
    // interval += this.intervalHours * 60;
    interval += 0 * 60;
    // interval += this.intervalMinutes;
    interval += 0;

    let time = this.AddDays(dateStart, 0);
    let v = volumeStart;
    let o = priceStart;
    let h = o + Math.random() * priceRange;
    let l = o - Math.random() * priceRange;
    let c = l + Math.random() * (h - l);

    const stock = [];
    while (time.getTime() < dateEnd.getTime()) {
      stock.push({ date: time, open: o, high: h, low: l, close: c, volume: v });

      o = c + (Math.random() - 0.5) * priceRange;
      if (o < 0) {
        o = Math.abs(o) + 2;
      }
      h = o + Math.random() * priceRange;
      l = o - Math.random() * priceRange;
      c = l + Math.random() * (h - l);
      v = v + (Math.random() - 0.5) * volumeRange;
      if (v < 0) {
        v = Math.abs(v) + 10000;
      }

      o = Math.round(o * 100) / 100;
      h = Math.round(h * 100) / 100;
      l = Math.round(l * 100) / 100;
      c = Math.round(c * 100) / 100;
      v = Math.round(v * 100) / 100;

      time = this.AddMinutes(time, interval);
    }
    // setting data intent for Series Title
    // (stock as any).__dataIntents = {
    //   close: ["SeriesTitle/Stock Prices"],
    // };
    console.log(stock, 'stock')
    return stock;
  }

  static AddMinutes(date, minutes) {
    return new Date(date.getTime() + minutes * 60 * 1000);
  }

  static AddHours(date, hours) {
    return new Date(date.getTime() + hours * 60 * 60 * 1000);
  }

  static AddDays(date, days) {
    return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
  }

  static AddYears(date, years) {
    return new Date(
      date.getFullYear() + years,
      date.getMonth(),
      date.getDate()
    );
  }

  toShortString(largeValue) {
    let roundValue;

    if (largeValue >= 1000000) {
      roundValue = Math.round(largeValue / 100000) / 10;
      return roundValue + "M";
    }
    if (largeValue >= 1000) {
      roundValue = Math.round(largeValue / 100) / 10;
      return roundValue + "K";
    }

    roundValue = Math.round(largeValue);
    return roundValue + "";
  }

  static GetYear(date) {
    return date.getFullYear();
  }

  static GetQuarter(date) {
    const month = date.getMonth();
    return Math.round((month + 2) / 3);
  }

  static GetLastItem(array) {
    if (array.length === 0) {
      return null;
    }
    return array[array.length - 1];
  }

  static GetNewItem(array, interval) {
    const lastItem = this.GetLastItem(array);

    if (interval === undefined) {
      interval = this.intervalDays * 24 * 60;
      interval += this.intervalHours * 60;
      interval += this.intervalMinutes;
    }

    const time = this.AddMinutes(lastItem.date, interval);
    let v = lastItem.volume;
    let o = lastItem.open;
    let h = lastItem.high;
    let l = lastItem.low;
    let c = lastItem.close;

    o = c + (Math.random() - 0.5) * this.priceRange;
    if (o < 0) {
      o = Math.abs(o) + 2;
    }
    h = o + Math.random() * this.priceRange;
    l = o - Math.random() * this.priceRange;
    c = l + Math.random() * (h - l);
    v = v + (Math.random() - 0.5) * this.volumeRange;
    if (v < 0) {
      v = Math.abs(v) + 10000;
    }

    const newValue = {
      date: time,
      open: o,
      high: h,
      low: l,
      close: c,
      volume: v,
    };

    return newValue;
  }
}
