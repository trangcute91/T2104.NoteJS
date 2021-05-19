#include<stdio.h>
#include<math.h>
int main(){
	float a,b,c,d,s,p;
	printf("nhap 3 canh cua tam giac\n");
	do{
	printf("nhap canh a =");
		scanf("%f",&a);
		printf("nhap canh b =");
		scanf("%f",&b);
		printf("nhap canh c =");
		scanf("%f",&c);
		printf("nhap vao 3 canh\n");
		}
	while(a+b<c || a+c<b || b+c<a);{
		d=(a+b+c);
		p=d/2;
		s=sqrt(p*(p-a)*(p-b)*(p-c));
		printf("chu vi cua tam giac la %f \n",d);
		printf("dien tich cua tam gaic la %f",s);
	
}
}

