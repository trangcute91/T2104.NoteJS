bool ktsnt( int n){
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
//		int nghichdao(int n);	
	int nghichdao(int n){
	int y=0;
	while(n!=0){
	y=y*10+n%10;
	n/=10;
		}
	return y;	
}
int songuyentoketiep(int n){
	int d=0;
	int m;
	for(int i=n+1;;i++){
		if(ktsnt(i)){
			return i;
		}
	}
}
int timsothuocfibonaci(int n){
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
int ucln(int a,int b){
	int i,ucl,min;
	if(a<b){
		min=a;
		}else{
			min=b;
		}
	for(i=1;i<min;i++){
		if(a%i==0&&b%i==0){
			ucl=i;
			}
		}
	return ucl;
	}
	int bcnn(int a,int b){
	int bcn=a*b;
	for(int i=a*b;i>=a&&i>=b;i--){
		if(i%a==0&&i%b==0){
			bcn=i;
		}
	}return bcn;
}
bool timxtrongmang(int arr[],int n,int x){
	for(int i=0;i<n;i++){
		if(arr[i]==x){
			return true;
		}else{
		return false;}
	}
}

