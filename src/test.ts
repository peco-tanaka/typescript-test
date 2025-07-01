export const test = () => {
  console.log("Test function executed");

  const name: string = "Mike";
  const age: number = 30;
  const isStudent: boolean = false;
  const hobbies: string[] = ["reading", "gaming", "coding"];
  const address: object = {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  };
  const today: Date = new Date();
  const none: null = null;
  const notDefined: undefined = undefined;
  const random: any = "HEllo World";
  const gender: "male" | "female" = "male";

/*   // 引数に文字列の配列を受け取り、その中身の順番にして出力する関数を定義します。
  const reverseArray = (arr: string[], hasTom?: boolean): string[] => {
    const reversedArray: string[] = [];
    let index: number = arr.length - 1;
    while (index >= 0) {
      reversedArray.push(arr[index]);
      index--;
    }

    if (hasTom) {
      reversedArray.push("Tom");
    }

    return reversedArray;
  };

  console.log(reverseArray(["a", "b", "c", "d"], true));
   */
};
