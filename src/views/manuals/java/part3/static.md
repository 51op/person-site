#static关键字

在类中，用static声明的成员变量为静态成员变量，也称为类变量。 类变量的生命周期和类相同，在整个应用程序执行期间都有效。它有如下特点：

　　1. 为该类的公用变量，属于类，被该类的所有实例共享，在类被载入时被显式初始化。

　　2. 对于该类的所有对象来说，static成员变量只有一份。被该类的所有对象共享!!

　　3. 一般用“类名.类属性/方法”来调用。(也可以通过对象引用或类名(不需要实例化)访问静态成员。)

　　4. 在static方法中不可直接访问非static的成员。

* 核心要点：

            static修饰的成员变量和方法，从属于类。
    
            普通变量和方法从属于对象的。

``` 
public class User2 {
    int id; // id
    String name; // 账户名
    String pwd; // 密码
     
    static String company = "北京尚学堂"; 
     
     
    public User2(int id, String name) {
        this.id = id;
        this.name = name;
    }
     
    public void login() {
        printCompany();
        System.out.println(company); 
        System.out.println("登录：" + name);
    }
     
    public static void printCompany() {
//         login();//调用非静态成员，编译就会报错
        System.out.println(company);
    }
     
    public static void main(String[] args) {
        User2 u = new User2(101, "高小七");
        User2.printCompany();
        User2.company = "北京阿里爷爷";
        User2.printCompany();
    }
}
```
![](/img/1494927332527045.png)

