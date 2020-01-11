export class ConvertHelper {
  /**
   * @desc substring values to 26 characters
   * @param  val The string will substring
   * @return string ex: (value...)
   */
  static substringTo26Chart(val: string) {
    if (val && val.length > 20) {
      return val.substring(0, 26) + '...';
    }

    return val;
  }

  /**
   * @desc Convert a Unix timestamp to datetime
   * @param  val Unix timestamp
   * @return local date August 2020
   */
  static unixTimestamp(val: number) {
    const options = { year: 'numeric', month: 'long' };

    if (val) {
      return new Date(val * 1000).toLocaleDateString('en', options);
    }
  }
}
