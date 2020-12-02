#==和equals方法

* “==”代表比较双方是否相同,“==”比较两个变量本身的值，即两个对象在内存中的首地址,如果是基本类型则表示值相等，如果是引用类型则表示地址相等即是同一个对象。

* Object类中定义有：public boolean equals(Object obj)方法，提供定义“对象内容相等”的逻辑。比如，我们在公安系统中认为id相同的人就是同一个人、学籍系统中认为学号相同的人就是同一个人。

* Object 的 equals 方法默认就是比较两个对象的hashcode，是同一个对象的引用时返回 true 否则返回 false。但是，我们可以根据我们自己的要求重写equals方法。
      
      
``` 
public class TestEquals { 
    public static void main(String[] args) {
        Person p1 = new Person(123,"高淇");
        Person p2 = new Person(123,"高小七");     
        System.out.println(p1==p2);     //false，不是同一个对象
        System.out.println(p1.equals(p2));  //true，id相同则认为两个对象内容相同
        String s1 = new String("尚学堂");
        String s2 = new String("尚学堂");
        System.out.println(s1==s2);         //false, 两个字符串不是同一个对象
        System.out.println(s1.equals(s2));  //true,  两个字符串内容相同
    }
}
class Person {
    int id;
    String name;
    public Person(int id,String name) {
        this.id=id;
        this.name=name;
    }
    public boolean equals(Object obj) {
        if(obj == null){
            return false;
        }else {
            if(obj instanceof Person) {
                Person c = (Person)obj;
                if(c.id==this.id) {
                    return true;
                }
            }
        }
        return false;
    }
}

```