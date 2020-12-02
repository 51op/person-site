#Map接口

    Map就是用来存储“键(key)-值(value) 对”的。 Map类中存储的“键值对”通过键来标识，所以“键对象”不能重复。

    Map 接口的实现类有HashMap、TreeMap、HashTable、Properties等。
    
 
 ![](/img/1495617463792119.png)
 
 
 
 #HashMap和HashTable
 
 
 HashMap采用哈希算法实现，是Map接口最常用的实现类。 由于底层采用了哈希表存储数据，我们要求键不能重复，如果发生重复，新的键值对会替换旧的键值对。 HashMap在查找、删除、修改方面都有非常高的效率
 
 
 
 ``` 
 ublic class TestMap {
     public static void main(String[] args) {
         Map<Integer, String> m1 = new HashMap<Integer, String>();
         Map<Integer, String> m2 = new HashMap<Integer, String>();
         m1.put(1, "one");
         m1.put(2, "two");
         m1.put(3, "three");
         m2.put(1, "一");
         m2.put(2, "二");
         System.out.println(m1.size());
         System.out.println(m1.containsKey(1));
         System.out.println(m2.containsValue("two"));
         m1.put(3, "third"); //键重复了，则会替换旧的键值对
         Map<Integer, String> m3 = new HashMap<Integer, String>();
         m3.putAll(m1);
         m3.putAll(m2);
         System.out.println("m1:" + m1);
         System.out.println("m2:" + m2);
         System.out.println("m3:" + m3);
     }
 }
 
 
 ```
 
HashTable类和HashMap用法几乎一样，底层实现几乎一样，只不过HashTable的方法添加了synchronized关键字确保线程同步检查，效率较低。

HashMap与HashTable的区别

      1. HashMap: 线程不安全，效率高。允许key或value为null。

      2. HashTable: 线程安全，效率低。不允许key或value为null。



