#包装类基本知识

1.Java是面向对象的语言，但并不是“纯面向对象”的，因为我们经常用到的基本数据类型就不是对象。但是我们在实际应用中经常需要将基本数据转化成对象，以便于操作。比如：将基本数据类型存储到Object[]数组或集合中的操作等等。

2.为了解决这个不足，Java在设计类时为每个基本数据类型设计了一个对应的类进行代表，这样八个和基本数据类型对应的类统称为包装类(Wrapper Class)。

3.包装类均位于java.lang包，八种包装类和基本数据类型的对应关系如所示：

|基本数据类型 | 包装类|
|-----|--------|
|byte|Byte|
|short|Short|
|char|Character|
|int|Integer|
|long|Long|
|float|Float|
|double|Double|


<font color=red>
在这八个类中，除了Character和Boolean以外，其他的都是“数字型”，“数字型”都是java.lang.Number的子类。Number类是抽象类，因此它的抽象方法，所有子类都需要提供实现。Number类提供了抽象方法：intValue()、longValue()、floatValue()、doubleValue()，意味着所有的“数字型”包装类都可以互相转型
</font>


#包装类的用途



1. 作为和基本数据类型对应的类型存在，方便涉及到对象的操作，如Object[]、集合等的操作。

2. 包含每种基本数据类型的相关属性如最大值、最小值等，以及相关的操作方法(这些操作方法的作用是在基本数据类型、包装类对象、字符串之间提供相互之间的转化!)。



``` 
public class Test {
    /** 测试Integer的用法，其他包装类与Integer类似 */
    void testInteger() {
        // 基本类型转化成Integer对象
        Integer int1 = new Integer(10);
        Integer int2 = Integer.valueOf(20); // 官方推荐这种写法
        // Integer对象转化成int
        int a = int1.intValue();
        // 字符串转化成Integer对象
        Integer int3 = Integer.parseInt("334");
        Integer int4 = new Integer("999");
        // Integer对象转化成字符串
        String str1 = int3.toString();
        // 一些常见int类型相关的常量
        System.out.println("int能表示的最大整数：" + Integer.MAX_VALUE); 
    }
    public static void main(String[] args) {
        Test test  = new Test();
        test.testInteger();
    }
}
```  


#自动装箱和拆箱
      
      自动装箱和拆箱就是将基本数据类型和包装类之间进行自动的互相转换。JDK1.5后，Java引入了自动装箱(autoboxing)/拆箱(unboxing)。



1、自动装箱：

      基本类型的数据处于需要对象的环境中时，会自动转为“对象”。

      我们以Integer为例：在JDK1.5以前，这样的代码 Integer i = 5 是错误的，必须要通过Integer i = new Integer(5) 这样的语句来实现基本数据类型转换成包装类的过程;而在JDK1.5以后，Java提供了自动装箱的功能，因此只需Integer i = 5这样的语句就能实现基本数据类型转换成包装类，这是因为JVM为我们执行了Integer i = Integer.valueOf(5)这样的操作，这就是Java的自动装箱。

2、自动拆箱：

      每当需要一个值时，对象会自动转成基本数据类型，没必要再去显式调用intValue()、doubleValue()等转型方法。

      如 Integer i = 5;int j = i; 这样的过程就是自动拆箱。

      我们可以用一句话总结自动装箱/拆箱：

      自动装箱过程是通过调用包装类的valueOf()方法实现的，而自动拆箱过程是通过调用包装类的 xxxValue()方法实现的(xxx代表对应的基本数据类型，如intValue()、doubleValue()等)。

      自动装箱与拆箱的功能事实上是编译器来帮的忙，编译器在编译时依据您所编写的语法，决定是否进行装箱或拆箱动作，如示例8-3与示例8-4所示。


```
Integer i = 100;//自动装箱
//相当于编译器自动为您作以下的语法编译：
Integer i = Integer.valueOf(100);//调用的是valueOf(100)，而不是new Integer(100)
```

``` 
Integer i = 100;
int j = i;//自动拆箱
//相当于编译器自动为您作以下的语法编译：
int j = i.intValue();
```
      
3、所以自动装箱与拆箱的功能是所谓的“编译器蜜糖(Compiler Sugar)”，虽然使用这个功能很方便，但在程序运行阶段您得了解Java的语义：


包装类空指针异常问题
``` 

public class Test1 {
    public static void main(String[] args) {
        Integer i = null;
        int j = i; //相当于int j = i.intValue();
    }
}
```


4、null表示i没有指向任何对象的实体，但作为对象名称是合法的(不管这个对象名称存是否指向了某个对象的实体)。由于实际上i并没有指向任何对象的实体，所以也就不可能操作intValue()方法，这样上面的写法在运行时就会出现NullPointerException错误。



自动装箱与拆箱

``` 
public class Test2 {
    /**
     * 测试自动装箱和拆箱 结论：虽然很方便，但是如果不熟悉特殊情况，可能会出错！
     */
    public static void main(String[] args) {
        Integer b = 23; // 自动装箱
        int a = new Integer(20); //自动拆箱
        // 下面的问题我们需要注意：
        Integer c = null;
        int d = c; // 此处其实就是：c.intValue(),因此抛空指针异常。
    }
}
```