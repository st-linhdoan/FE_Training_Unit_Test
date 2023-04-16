####FE TRAINING UNIT TEST

1. Các bước viết unit test:
- Identify all possible case
- Specify parameters and expected results for each case
- Write test
- Execute test
- Evaluation and assessment of results
2. Các thành phần cơ bản có trong 1 unit test:
- Test suit
- Block test
- Test case
- Action
- Assert
3. Liệt kê tất cả các test cases mà bạn có thể nghĩ ra để kiểm tra 1 mảng có phải là mảng số tăng dần hay không?
|Input | Ouput |
|:-----|:----- |
|[ ]    | false |
| [1]   | false |
| {} | false |
|'aaaa'| false|
|function| false|
| NaN|false|
|null| false|
|undefined| false|
|['a', 'b']| false|
|['a', 1, 2, 3]| false|
|[1, null, 2]| false|
|[1, undefined]| false|
|[1, NaN, 3] | false|
|[5, 4, 3, 2, 1]| false|
|[5, 6, 2, 1] | false | 
|[0.5, 0.4]| false |
|[1, 1, 1]| true|
|[1, 2, 2, 3]|true|
|[1, 2, 3, 4] | true|
|[0.1, 0.2, 0.4]| true|
|[-5, -4, -3, -2, -1]| true|
