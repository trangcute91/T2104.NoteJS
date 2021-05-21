#include<stdio.h>
#include<math.h>
int main(){
	int n,x;
	printf("nhap vao so n=");
	scanf("%d",&n);
	if(n>2){
		for(x=2;x<n;x=x+2){
			
			printf("%d \n",x);
		}
	}else{
		printf("nhap lai so \n");
	}
	
	
}


