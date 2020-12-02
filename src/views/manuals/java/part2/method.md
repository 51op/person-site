# 方法

* 方法就是一段用来完成特定功能的代码片段，类似于其它语言的函数。

* 方法用于定义该类或该类的实例的行为特征和功能实现。 方法是类和对象行为特征的抽象。方法很类似于面向过程中的函数。面向过程中，函数是最基本单位，整个程序由一个个函数调用组成。面向对象中，整个程序的基本单位是类，方法是从属于类和对象的。

方法声明格式：

[修饰符1  修饰符2  …]   返回值类型    方法名(形式参数列表){
    Java语句；… … …
 }
方法的调用方式：

      对象名.方法名(实参列表)

      方法的详细说明

      1. 形式参数：在方法声明时用于接收外界传入的数据。

      2. 实参：调用方法时实际传给方法的数据。

      3. 返回值：方法在执行完毕后返还给调用它的环境的数据。

      4. 返回值类型：事先约定的返回值的数据类型，如无返回值，必须显示指定为为void。


```  
public class Test20 {
    /** main方法：程序的入口 */
    public static void main(String[] args) {
        int num1 = 10;
        int num2 = 20;
        //调用求和的方法：将num1与num2的值传给add方法中的n1与n2
        // 求完和后将结果返回，用sum接收结果
        int sum = add(num1, num2);
        System.out.println("sum = " + sum);//输出：sum = 30
        //调用打印的方法：该方法没有返回值
        print();
    }
    /** 求和的方法 */
    public static int add(int n1, int n2) {
        int sum = n1 + n2;
        return sum;//使用return返回计算的结果
    }
    /** 打印的方法 */
    public static void print() {
        System.out.println("北京尚学堂...");
    }
}
　　
```


<font color=red>注意事项</font>

      1. 实参的数目、数据类型和次序必须和所调用的方法声明的形式参数列表匹配。

      2. return 语句终止方法的运行并指定要返回的数据。

      3. Java中进行方法调用中传递参数时，遵循值传递的原则(传递的都是数据的副本)：

      4. 基本类型传递的是该数据值的copy值。

      5. 引用类型传递的是该对象引用的copy值，但指向的是同一个对象。
      
      
    
#方法重载


***方法的重载是指一个类中可以定义多个方法名相同，但参数不同的方法。 调用时，会根据不同的参数自动匹配对应的方法***


<font color=red>雷区!!!</font>

      重载的方法，实际是完全不同的方法，只是名称相同而已!

      构成方法重载的条件：

      1.不同的含义：形参类型、形参个数、形参顺序不同

      2.只有返回值不同不构成方法的重载

         如：int a(String str){}与 void a(String str){}不构成方法重载

      3.只有形参的名称不同，不构成方法的重载

 ``` 
 public class Test21 {
     public static void main(String[] args) {
         System.out.println(add(3, 5));// 8
         System.out.println(add(3, 5, 10));// 18
         System.out.println(add(3.0, 5));// 8.0
         System.out.println(add(3, 5.0));// 8.0
         // 我们已经见过的方法的重载
         System.out.println();// 0个参数
         System.out.println(1);// 参数是1个int
         System.out.println(3.0);// 参数是1个double
     }
     /** 求和的方法 */
     public static int add(int n1, int n2) {
         int sum = n1 + n2;
         return sum;
     }
     // 方法名相同，参数个数不同，构成重载
     public static int add(int n1, int n2, int n3) {
         int sum = n1 + n2 + n3;
         return sum;
     }
     // 方法名相同，参数类型不同，构成重载
     public static double add(double n1, int n2) {
         double sum = n1 + n2;
         return sum;
     }
     // 方法名相同，参数顺序不同，构成重载
     public static double add(int n1, double n2) {
         double sum = n1 + n2;
         return sum;
     }
     //编译错误：只有返回值不同，不构成方法的重载
     public static double add(int n1, int n2) {
         double sum = n1 + n2;
         return sum;
     }
     //编译错误：只有参数名称不同，不构成方法的重载
     public static int add(int n2, int n1) {
         double sum = n1 + n2;         
         return sum;
     }  
 }
 ```