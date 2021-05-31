#include<stdio.h>
int ucnn(int a,int b){
	int i,ucn,min;
	if(a<b){
		min=a;
		}else{
			min=b;
		}
	for(i=1;i<min;i++){
		if(a%i==0&&b%i==0){
			ucn=i;
			}
		}
	return ucn;
	}
	int main(){
		int a,b;
		printf("nhap vao so a=");
		scanf("%d",&a);
		printf("nhap vao so b=");
		scanf("%d",&b);
		printf("uoc chung lon nhat cua 2 so la %d",ucnn(a,b));
	}
