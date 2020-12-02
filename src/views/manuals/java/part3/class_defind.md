#类的定义

###类的定义方式
``` 
// 每一个源文件必须有且只有一个public class，并且类名和文件名保持一致！
public class Car { 
}
class Tyre { // 一个Java文件可以同时定义多个class
}
class Engine {
}
class Seat {
}
```
上面的类定义好后，没有任何的其他信息，就跟我们拿到一张张图纸，但是纸上没有任何信息，这是一个空类，没有任何实际意义。所以，我们需要定义类的具体信息。对于一个类来说，一般有三种常见的成员：属性field、方法method、构造器constructor。这三种成员都可以定义零个或多个。

public class SxtStu {
    //属性（成员变量）
    int id;
    String sname;
    int age;  
    //方法
    void study(){
        System.out.println("我正在学习！");
    }  
    //构造方法
   SxtStu(){
   }
}

----

### 属性(field，或者叫成员变量)

属性用于定义该类或该类对象包含的数据或者说静态特征。属性作用范围是整个类体。
在定义成员变量时可以对其初始化，如果不对其初始化，Java使用默认的值对其初始化。

|数据类型|默认值|
|-------|-----|
|整型|0|
|浮点型|0.0|
|字符型|'\u0000'|
|布尔型|false|
|所有饮用类型|null|