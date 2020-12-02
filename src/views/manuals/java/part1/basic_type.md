# 1.6 基本数据类型
Java是一种强类型语言，每个变量都必须声明其数据类型。 Java的数据类型可分为两大类：基本数据类型（primitive data type）和引用数据类型（reference data type）。
###Java中定义了3类8种基本数据类型

* 数值型－ byte、 short、int、 long、float、 double
* 字符型－ char
* 布尔型－boolean

![](/img/leixing.png)


### 整型变量/常量

    整型用于表示没有小数部分的数值，它允许是负数
    Java语言的整型常数默认为int型，声明long型常量可以后加‘ l ’或‘ L ’ 。
                           

 
![整型](/img/zhengxing.png)

>>整型常量的四种表示形式

* 十进制整数，如：99, -500, 0

* 八进制整数，要求以 0 开头，如：015

* 十六进制数，要求 0x 或 0X 开头，如：0x15

* 二进制数，要求0b或0B开头，如：0b01110011



### 浮点型变量/常量

      带小数的数据在Java中称为浮点型。浮点型可分为float类型和double类型。
      float类型又被称作单精度类型，尾数可以精确到7位有效数字，在很多情况下，float类型的精度很难满足需求。而double表示这种类型的数值精度约是float类型的两倍，又被称作双精度类型
      绝大部分应用程序都采用double类型。浮点型常量默认类型也是double
  
  ``` 
  double f = 314e2;  //314*10^2-->31400.0
  double f2 = 314e-2; //314*10^(-2)-->3.14
  ```
    float类型的数值有一个后缀F或者f ，没有后缀F/f的浮点数值默认为double类型。也可以在浮点数值后添加后缀D或者d， 以明确其为double类型
  
 
 float类型赋值时需要添加后缀F/f
  ``` 
  float  f = 3.14F;
  double d1  = 3.14;
  double d2 = 3.14D;
  ```
 *** <font color=red>老鸟建议!!!!</font>***

* 浮点类型float，double的数据不适合在不容许舍入误差的金融计算领域。如果需要进行不产生舍入误差的精确数字计算，需要使用BigDecimal类。
  
* java.math包下面的两个有用的类：BigInteger和BigDecimal，这两个类可以处理任意长度的数值。BigInteger实现了任意精度的整数运算。BigDecimal实现了任意精度的浮点运算
 ``` 
 import java.math.BigDecimal;
 public class Main {
     public static void main(String[] args) {
         BigDecimal bd = BigDecimal.valueOf(1.0);
         bd = bd.subtract(BigDecimal.valueOf(0.1));
         bd = bd.subtract(BigDecimal.valueOf(0.1));
         bd = bd.subtract(BigDecimal.valueOf(0.1));
         bd = bd.subtract(BigDecimal.valueOf(0.1));
         bd = bd.subtract(BigDecimal.valueOf(0.1));
         System.out.println(bd);//0.5
         System.out.println(1.0 - 0.1 - 0.1 - 0.1 - 0.1 - 0.1);//0.5000000000000001
     }
 }
 ```
 
###字符型变量/常量

    字符型在内存中占2个字节，在Java中使用单引号来表示字符常量。例如’A’是一个字符，它与”A”是不同的，”A”表示含有一个字符的字符串。

    char 类型用来表示在Unicode编码表中的字符。Unicode编码被设计用来处理各种语言的文字，它占2个字节，可允许有65536个字符。


* 字符型举例

        char eChar = 'a'; 
        char cChar ='中';
        Unicode具有从0到65535之间的编码，他们通常用从’\u0000’到’\uFFFF’之间的十六进制值来表示（前缀为u表示Unicode） 

* 字符型的十六进制值表示方法

char c = '\u0061';
Java 语言中还允许使用转义字符 ‘\’ 来将其后的字符转变为其它的含义。常用的转义字符及其含义和Unicode值
        

* 转义字符

char c2 = '\n';  //代表换行符


注意事项

以后我们学的String类，其实是字符序列(char sequence)。

```  
public class TestPrimitiveDataType3 {
    public static void main(String[] args) {
        char  a = 'T';
        char  b = '尚';
        char c = '\u0061';
        System.out.println(c);
        //转义字符
        System.out.println(""+'a'+'\n'+'b'); 
        System.out.println(""+'a'+'\t'+'b'); 
        System.out.println(""+'a'+'\''+'b');        //a'b 
        //String就是字符序列
        String  d = "abc";
         
    }
}
```

###boolean类型变量/常量


 boolean类型有两个常量值，true和false，在内存中占一位（不是一个字节），不可以使用 0 或非 0 的整数替代 true 和 false ，这点和C语言不同。 boolean 类型用来判断逻辑条件，一般用于程序流程控制 。

```
 boolean flag ;
        flag = true;   //或者flag=false;
        if(flag) {
                 // true分支
        } else {
                 //  false分支
        }

```
 *** <font color=red>老鸟建议!!!!</font>***
<font color=red >Less is More！！请不要这样写：if ( flag == true )，只有新手才那么写。关键也很容易写错成if(flag=true)，这样就变成赋值flag 为true而不是判断！老鸟的写法是if ( flag )或者if ( !flag) </font>



### 自动类型转换

可以将整型常量直接赋值给byte、 short、 char等类型变量，而不需要进行强制类型转换，只要不超出其表数范围即可

``
short  b = 12;  //合法
short  b = 1234567;//非法，1234567超出了short的表数范围
``

### 强制类型转换
强制类型转换，又被称为造型，用于显式的转换一个数值的类型。在有可能丢失信息的情况下进行的转换是通过造型来完成的，但可能造成精度降低或溢出。

语法格式：
```
(type)var
运算符“()”中的type表示将值var想要转换成的目标数据类型。

double x  = 3.14; 
int nx = (int)x;   //值为3
char c = 'a';
int d = c+1;
System.out.println(nx);
System.out.println(d);
System.out.println((char)d);
```
