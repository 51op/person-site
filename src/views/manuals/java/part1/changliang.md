# 1.5 常量(符号常量)

>>常量通常指的是一个固定的值

    常量通常指的是一个固定的值，例如：1、2、3、’a’、’b’、true、false、”helloWorld”等。

    在Java语言中，主要是利用关键字final来定义一个常量。 常量一旦被初始化后不能再更改其值。
    

####声明格式为：
``` 
final type varName = value;
```
``` 
public class TestConstants {
    public static void main(String[] args) {
        final double PI = 3.14;
        // PI = 3.15; //编译错误，不能再被赋值！ 
    }
}
```

<font color=red></font>为了更好的区分和表述，一般将1、2、3、’a’、’b’、true、false、”helloWorld”等称为字面常量，而使用final修饰的PI等称为符号常量。



### 老鸟建议
   
  变量和常量命名规范：
  
  1. 所有变量、方法、类名：见名知意
  
  2. 类成员变量：首字母小写和驼峰原则:  monthSalary
  
  3. 局部变量：首字母小写和驼峰原则
  
  4. 常量：大写字母和下划线：MAX_VALUE
  
  5. 类名：首字母大写和驼峰原则:  Man, GoodMan
  
  6. 方法名：首字母小写和驼峰原则: run(), runRun()
