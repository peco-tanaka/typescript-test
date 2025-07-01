export const test = () => {
/*   console.log("Test function executed");

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
  const gender: "male" | "female" = "male"; */

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

/*   // ユーザー情報を表すオブジェクトを定義
  const user = {
    userId: 1,
    name: "Mike",
    age: 30,
    email: "sample@gmail.com",
    isActive: true
  }

  // ユーザー情報の型を定義
  interface UserProps {
    userId: number;
    name: string;
    age: number;
    email?: string;
    isActive: boolean;
  }

  // UserPropsを継承したAdminUserインターフェースをでroleプロパティを追加
  interface AdminUserProps extends UserProps{
    role: string;
  }

  // 引数にアカウント情報を入れるとアカウントを作成する関数を定義（中身省略）
  const createAccount = (accountInfo: AdminUserProps) => {

  }

  createAccount({
    userId: 1,
    name: "Mike",
    age: 30,
    email: "",
    isActive: true,
    role: "admin"
  }) */

/*   // クラスの型定義
  class User {
    userId: number;
    name: string;
    age: number;
    email?: string;
    isActive: boolean;

    constructor(userId: number, name: string, age: number, email?: string, isActive: boolean = true) {
      this.userId = userId;
      this.name = name;
      this.age = age;
      this.email = email;
      this.isActive = isActive;
    }

    private getProfile(): string {
      return `Name: ${this.name}, Age: ${this.age}`;
    }

    static sayHelloWorld(): void {
      console.log("Hello World");
    }
  }

  const user = new User(1, "Mike", 30, "", true);
  User.sayHelloWorld();
  user.getProfile();

  // public, private, protected */

/*   const foo = (arg: string) => {
    return arg;
  }

  // ジェネリクス
  const bar = <T>(arg: T): T => {
    return arg;
  }

  bar<string>("Hello World");
 */


  const fetchUserData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
      userId: 1,
    });
    return response.data.status; // true, false, null, undefined
  }

  // null合体演算子によりfalseの場合nullかundefindを返す ??
  const isActive:boolean = fetchUserData() ?? false;


};
