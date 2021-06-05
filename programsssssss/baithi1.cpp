#include<stdio.h>
#include<math.h>
int main(){
float a,b,c,p,s;
	printf("nhap vao canh a=");
	scanf("%f",&a);
	printf("nhap vao canh b=");
	scanf("%f",&b);
	printf("nhap vao canh c=");
	scanf("%f",&c);
	if(a+b>c&&a+c>b,b+c>a){
		p=(a+b+c)/2;
		s=sqrt(p*(p-a)*(p-b)*(p-c));
		printf("dien tich cua tam giac la:%f",s);
	}else{
		printf("loi nhao khong dung");
	}
	
	
}
