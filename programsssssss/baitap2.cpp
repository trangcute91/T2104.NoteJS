#include<stdio.h>
#include<math.h>
int main(){
	float a,b,c,dt,x1,x2,x,sb;
    printf("nhap a =");
	scanf("%f",&a);
    printf("nhap b=");
    scanf("%f",&b);
     printf("nhap c=");
    scanf("%f",&c);
    if(a==0){
    	printf("phuong trinh bac 1");
	}else{
		dt=(b*b)-(4*a*c);
		if(dt<0){
			printf("phuong trinh vo nghiem");
		}else{
			sb=sqrt(dt);
			if(dt=0){
				x=-b*(2*a);
				printf("x = %f",x);
			}else{
		
				printf("phuong trinh co 2 nghiem\n");
				 x1=(-b+sb)/(2*a);
				printf("x1= %f\n",x1);
				 x2=(-b-sb)/(2*a);
				 printf("x2= %f\n",x2);
				 
		}
	}
}
}


