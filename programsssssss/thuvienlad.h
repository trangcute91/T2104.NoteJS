int timsothuocfibonaci(int n){// tim so fibonacci
	if(n<1) return 0;
	if(n <3) return 1;
	if(n<4) return 2;
	int x1 = 1,x2=1,x3=2;
	for(int i=4;i<=n;i++){
		x1 = x2;
		x2 = x3;
		x3 = x1+x2;
	}
	return x3;
}
bool ktsnt( int n){// kiem tra so nguyen to
	int d;
	d=0;
	for(int i=1;i<=n;i++){
	if(n%i==0){
		d++;}
	}
		 if(d==2){
		return true;
		}
		return false;}
		
		
int songuyentoketiep(int n){// so nguyen to ke tiep
	int d=0;
	int m;
	for(int i=n+1;;i++){
		if(ktsnt(i)){
			return i;
		}
	}
}
//		int nghichdao(int n);	
	int nghichdao(int n){
	int y=0;
	while(n!=0){
	y=y*10+n%10;
	n/=10;
		}
	return y;	
}
		
