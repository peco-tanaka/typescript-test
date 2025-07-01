# TypeScriptの効率的な学習方法

## 1.メソッドなどはcmd押しながらクリックして定義元に飛ぶ
- コードを全部読まなくても定義元を見に行けばわかる

## 2.生成AIに変換してもらう
```TypeScript
function greet(name) {
  return `Hello, ${name}`
}

function greet(name: string): string {
  return `Hello, ${name}`
}
```

## 3.エラーをよく読む
- 型に関するエラーが多い

## 4.困ったらanyにつっっこむ
- 特に学習用で型定義に困ったらanyに突っ込む