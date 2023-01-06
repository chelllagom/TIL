package java;

public class Test {
    public static void main(String[] args) {

        // 1.----------------------------------------------
        // 값을 대입
        int x1 = 3;

        // auto boxing
        Integer x2 = 3;
        // 박싱된 Integer(3)을 참조
        // it works like -> Integer x2 = new Integer(3);

        // auto unboxing
        x1 = x2;
        // 언박싱하여 값을 꺼내서 대입, 참조를 대입하는 것이 아님
        // it works like -> x1 = x2.intValue();

        // 2.----------------------------------------------
        Object[] objList = new Object[5];
        objList[0] = "문자열";
        objList[1] = 3; // 정수
        objList[2] = 3.4; // 실수
        objList[3] = true; // boolean

        // 범용 자료형(ex Object)은 여러가지 type을 한번에 참조 혹은 대입할 수 있기 때문에 편리하다?
        // 꺼내 쓸 때 type을 변경해주어야함
        String m = (String) objList[0];
        int a = (int) objList[1];
        float b = (float) objList[2];
        boolean flag = (boolean) objList[3];

        // 3.----------------------------------------------
        GenericSampleList<Integer> gs = new GenericSampleList<>();
        gs.add(3);
        gs.add(5);
        gs.get(0);
        gs.size();
        gs.clear();

        // 4.----------------------------------------------
        // 07 가변크기 컬렉션으로 변경하기
    }
}
