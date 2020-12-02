#package和import


我们通过package实现对类的管理，package的使用有两个要点：

<font color=red>

　　1. 通常是类的第一句非注释性语句。</br>

　　2. 包名：域名倒着写即可，再加上模块名，便于内部管理类。</br>
</font>

|Java中的常用包|说明|
|-------|------|
|java.lang | 包含一些Java语言的核心类，如String、Math、Integer、System和Thread，提供常用功能。|
|java.awt   |包含了构成抽象窗口工具集（abstract window toolkits）的多个类，这些类被用来构建和管理应用程序的图形用户界面(GUI)。|
|java.net    |包含执行与网络相关的操作的类。|
|java.io     |包含能提供多种输入/输出功能的类。|
|java.util    |包含一些实用工具类，如定义系统特性、使用与日期日历相关的函数。|



#导入类import


如果我们要使用其他包的类，需要使用import导入，从而可以在本类中直接通过类名来调用，否则就需要书写类的完整包名和类名。import后，便于编写代码，提高可维护性。

注意要点：
<font color=red>
　　1. Java会默认导入java.lang包下所有的类，因此这些类我们可以直接使用。</br>

　　2. 如果导入两个同名的类，只能用包名+类名来显示调用相关类</br>
</font>

##静态导入

静态导入(static import)是在JDK1.5新增加的功能，其作用是用于导入指定类的静态属性，这样我们可以直接使用静态属性。


``` 
package cn.sxt;
 //以下两种静态导入的方式二选一即可
import static java.lang.Math.*;//导入Math类的所有静态属性
import static java.lang.Math.PI;//导入Math类的PI属性
 
public class Test2{
    public static void main(String [] args){
        System.out.println(PI);
        System.out.println(random());
    }
}
```