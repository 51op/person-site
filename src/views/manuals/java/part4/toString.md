#toString方法

Object类中定义有public String toString()方法，其返回值是 String 类型。Object类中toString方法的源码为：


``` 
public String toString() {
    return getClass().getName() + "@" + Integer.toHexString(hashCode());
}
```
<font color=red>      
根据如上源码得知，默认会返回“类名+@+16进制的hashcode”。
在打印输出或者用字符串连接对象时，会自动调用该对象的toString()方法。
</font>

``` 
class Person {
    String name;
    int age;
    @Override
    public String toString() {
        return name+",年龄："+age;
    }
}
public class Test {
    public static void main(String[] args) {
        Person p=new Person();
        p.age=20;
        p.name="李东";
        System.out.println("info:"+p);//info:李东,年龄：20
         
        Test t = new Test();
        System.out.println(t);
    }
}

```