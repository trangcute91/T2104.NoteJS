#include<stdio.h>
#include<math.h>
int main(){
	int g,s,n;
	s=1;
	n=2;
	printf("nhap vao so giai thua =");
	scanf("%d",&g);
	while(n<g+1){
		s=s*n;
		n=n+1;
	}printf("ket qua la %d",s);
	
}
