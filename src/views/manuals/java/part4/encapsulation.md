
#封装

       1.封装就是把对象的属性和操作结合为一个独立的整体，并尽可能隐藏对象的内部实现细节。
       2.我们程序设计要追求“高内聚，低耦合”。 高内聚就是类的内部数据操作细节自己完成，不允许外部干涉;低耦合是仅暴露少量的方法给外部使用，尽量方便外部调用
       

#### 封装的实现—使用访问控制符

Java中4种“访问控制符”分别为private、default、protected、public

      1. private 表示私有，只有自己类能访问

      2. default表示没有修饰符修饰，只有同一个包的类能访问

      3. protected表示可以被同一个包的类以及其他包中的子类访问

      4. public表示可以被该项目的所有包中的所有类访问
      
#### 封装的使用细节

类的属性的处理:

      1. 一般使用private访问权限。

      2.  提供相应的get/set方法来访问相关属性，这些方法通常是public修饰的，以提供对属性的赋值与读取操作(注意：boolean变量的get方法是is开头!)。

      3. 一些只用于本类的辅助性方法可以用private修饰，希望其他类调用的方法用public修饰。
      
``` 
public class Person {
    // 属性一般使用private修饰
    private String name;
    private int age;
    private boolean flag;
    // 为属性提供public修饰的set/get方法
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public boolean isFlag() {// 注意：boolean类型的属性get方法是is开头的
        return flag;
    }
    public void setFlag(boolean flag) {
        this.flag = flag;
    }
}
```
