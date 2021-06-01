#include<stdio.h>
int main(){
	int s,n;
	n=2;
	s=1;
	while(n<100001){
		s=s+n;
		n=n+1;
	}printf("ket qua la %d",s);
}
