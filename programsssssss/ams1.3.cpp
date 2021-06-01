#include<stdio.h>
#include<math.h>
int main(){
	float a,b,c,d,p,s;
	printf("nhap vao canh a=");
	scanf("%f",&a);
	printf("nhap vao canh b=");
	scanf("%f",&b);
	printf("nhap vao canh c=");
	scanf("%f",&c);
	if((a+b>c)&&(a+c>b)&&(b+c>a)){
		d=a+b+c;
		printf("chi vi tam giac bang %f",d);
		p=d/2;
		s=sqrt(p*(p-a)*(p-b)*(p-c));
		printf("dien tich tam giac bang %f",s);
	}else{
		printf("khong phai tam giac");
	}
}
