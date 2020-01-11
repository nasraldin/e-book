export class ConvertHelper {
  /**
   * @desc substring values to 26 characters
   * @param  val The string will substring
   * @return string ex: (value...)
   */
  static substringTo26Chart(val: string) {
    if (val) {
      return val.substring(0, 26) + '...';
    }
  }

  /**
   * @desc Convert a Unix timestamp to datetime
   * @param  val Unix timestamp
   * @return local datetime 10/21/2020, 5:18:56 AM
   */
  static unixTimestamp(val: number) {
    if (val) {
      return new Date(val * 1000).toLocaleString();
    }
  }
}
