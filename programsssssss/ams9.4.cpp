#include<stdio.h>
int bcnn(int a,int b){
	int bcn=a*b;
	for(int i=a*b;i>=a&&i>=b;i--){
		if(i%a==0&&i%b==0){
			bcn=i;
		}
	}return bcn;
}
int main(){
	int a,b;
	printf("nhap vao so a=");
	scanf("%d",&a);
	printf("nhap vao so b=");
	scanf("%d",&b);
	printf("boi chung no nhat cua 2 so a va b la %d",bcnn(a,b));
}
