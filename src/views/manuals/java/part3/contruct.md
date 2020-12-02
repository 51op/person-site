#构造方法

构造器也叫构造方法(constructor)，用于对象的初始化。构造器是一个创建对象时被自动调用的特殊方法，目的是对象的初始化。构造器的名称应与类的名称一致。Java通过new关键字来调用构造器，从而返回该类的实例，是一种特殊的方法。

声明格式：　

        [修饰符] 类名(形参列表){
            //n条语句
        }

要点：

<font color=red>
　　1. 通过new关键字调用!!<br>

　　2. 构造器虽然有返回值，但是不能定义返回值类型(返回值的类型肯定是本类)，不能在构造器里使用return返回某个值。<br>

　　3. 如果我们没有定义构造器，则编译器会自动定义一个无参的构造函数。如果已定义则编译器不会自动添加!<br>

　　4. 构造器的方法名必须和类名一致!<br>

　　5. 如果方法构造中形参名与属性名相同时，需要使用this关键字区分属性与形参,this.id 表示属性id;id表示形参id<br>
</font>




``` 
class Point {
    double x, y;
    public Point(double _x, double _y) {
        x = _x;
        y = _y;  
    }
    public double getDistance(Point p) {
        return Math.sqrt((x - p.x) * (x - p.x) + (y - p.y) * (y - p.y));
    }
}
public class TestConstructor {
    public static void main(String[] args) {
        Point p = new Point(3.0, 4.0);
        Point origin = new Point(0.0, 0.0);
        System.out.println(p.getDistance(origin));
    }
}

```


构造方法重载(创建不同用户对象)
``` 
public class User {
    int id; // id
    String name; // 账户名
    String pwd; // 密码
    public User() {
 
    }
    public User(int id, String name) {
        super();
        this.id = id;
        this.name = name;
    }
    public User(int id, String name, String pwd) {
        this.id = id;
        this.name = name;
        this.pwd = pwd;
    }
    public static void main(String[] args) {
        User u1 = new User();
        User u2 = new User(101, "高小七");
        User u3 = new User(100, "高淇", "123456");     
    }
}

```