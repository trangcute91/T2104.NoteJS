#include<stdio.h>
int main(){
	int a,b,c;
	printf("nhap so a");
	scanf("%d",&a); 	
	printf("nhap so b");
	scanf("%d",&b);
	printf("nhap so c");
	scanf("%d",&c);
	int min=a;
	if(min>=b){
		min=b;
	}if(min>=c){
		min=c;
	}
	printf("so nho nhat la %d",min);
                 	
}
