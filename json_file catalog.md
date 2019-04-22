## 数据格式

如没有正确执行，少加、漏加、错加代码将导致页面统计不到任何数据，后果很严重。 

#### json数据类型

JSON（JavaScript Object Notation）是一种轻量级，基于文本，语言无关的数据交换格式。其包括了基本数据类型4种和复合数据类型2种，共6种数据类型。在下面章节中，JSON数据类型的表示法为JSON+空格+数据类型，如：JSON Array。

传输的数据，包括对象属性以及数组成员， *必须(MUST)* 是6种JSON数据类型之一。 *杜绝(MUST NOT)* 使用function、Date等js对象类型。

##### 基本数据类型

* Number可以表示整数和浮点数。
* Boolean可以表示真假，值为true或false。
* String表示一个字符串。
* Null通常用于表示空对象。

"true"和true，这两个数据代表的是不同的数据类型。非字符串类型数据输出时一定 *不要(MUST NOT)* 为两端加上双引号，否则可能产生不希望的后果（如if中判断"false"的结果是true）。其他容易产生错误的例子如：0和"0"等。 

##### 复合型数据类型

Object是无序的集合，以键值对的方式保持数据。一个Object中包含零到多个name/value的数据，数据间以逗号(,)分隔。name为String类型，value可以是任意类型的数据。

Object的最后一个元素之后一定 *不要(MUST NOT)* 加上分隔符的逗号，否则可能导致解析出错。

Array(数组)为多个值的有序集合，数组元素间以逗号(,)分隔。



#### 数据字段

传送的数据包含在http响应体中。数据 *必须(MUST)* 是一个JSON Object。该Object可能包含3个字段：data，status，statusInfo。

#### 数据场景

##### 日期类型

年月日之间按照此顺序并用-连接，整个日期要是JSON string格式例子如下：

```json
{
    "status": 0,
    "data": "2010-10-10"
}
```

##### 二维表

二维表分两种形式：标准二维表、变通二维表。

1. 标准二维表

 ```json
[
    {
        "id": 250,
        "name": "erik",
        "sex": 1,
        "age": 18
    },
    {
        "id": 251,
        "name": "欧阳先伟",
        "sex": 1,
        "age": 28
    }
]
 ```

2. 变通二维表

```json
{
    "e-type": "table",
    "fields": ["id", "name", "sex", "age"],
    "data": [
        [250, "erik", 1, 18],
        [251, "欧阳先伟", 1, 28]
    ]
}
```

##### 键/值对象

* 键的属性名 *必须(MUST)* 为name， *杜绝(MUST NOT)* 使用key或k
* 值的属性名 *必须(MUST)* 为value， *杜绝(MUST NOT)* 使用v。

```json
{
    "name": "BMW",
    "value": 1
}
```



## 文件目录

* 图片文件夹：img
* CSS文件夹：css
* JS文件夹：js
* 第三方插件文件夹：libs
* Html文件夹：html

css、js与它对应的html文件名要一致，只是后缀不一样。

#### 文件命名

|   专题名称    |   描述   |
| :-----------: | :------: |
|  index.html   |   首页   |
|  header.html  |   头部   |
|  footer.html  |   尾部   |
|  detail.html  |  详情页  |
|   list.html   |  列表页  |
|  login.html   |  登录页  |
| register.html |  注册页  |
|   cart.html   |  购物车  |
|   mine.html   | 个人中心 |







