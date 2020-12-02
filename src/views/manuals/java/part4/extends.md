#类继承
    继承让我们更加容易实现类的扩展，extends的意思是“扩展”。子类是父类的扩展
    
    
> 如果新定义一个Student类，发现已经有Person类包含了我们需要的属性和方法，那么Student类只需要继承Person类即可拥有Person类的属性和方法

继承使用要点
<font color=red>
1.父类也称作超类、基类、派生类等。<br>

2.Java中只有单继承，没有像C++那样的多继承。多继承会引起混乱，使得继承链过于复杂，系统难于维护。<br>

3.Java中类没有多继承，接口有多继承。<br>

4.子类继承父类，可以得到父类的全部属性和方法 (除了父类的构造方法)，但不见得可以直接访问(比如，父类私有的属性和方法)。<br>

5.如果定义一个类时，没有调用extends，则它的父类是：java.lang.Object。<br>

6.Object类是所有Java类的根基类，也就意味着所有的Java对象都拥有Object类的属性和方法。如果在类的声明中未使用extends关键字指明其父类，则默认继承Object类。<br>
  

</font>
``` 

class Person {
    String name;
    int height;
    public void rest(){
        System.out.println("休息一会！");
    }  
}
class Student extends Person {
    String major; //专业
    public void study(){
        System.out.println("Hello");
    }  
    public Student(String name,int height,String major) {
        //天然拥有父类的属性
        this.name = name;
        this.height = height;
        this.major = major;
    }
}
public class Test{
    public static void main(String[] args) {
        Student s = new Student("abc",172,"Java");
        s.rest();
        s.study();
    }
}

```


#instanceof运算符      
      
      instanceof是二元运算符，左边是对象，右边是类；当对象是右面类或子类所创建对象时，返回true；否则，返回false

使用instanceof运算符进行类型判断
``` 
public class Test{
    public static void main(String[] args) {
        Student s = new Student("name",172,"Java");
        System.out.println(s instanceof Person);
        System.out.println(s instanceof Student);
    }
}
```