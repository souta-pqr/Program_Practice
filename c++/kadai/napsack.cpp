#include<iostream>
#include<algorithm>
using namespace std;

//input
int n;
int a[10010];

// DP table
int dp[10010];

int main(){
	cin >> n;
	for(int i=0; i<n; ++i)
		cin >> a[i];

	dp[0] = 0;
	for(int i=0; i<n; ++i)
	{
		dp[i+1] = max(dp[i], dp[i]+a[i]);
	}

	cout << dp[n] << endl;
}
