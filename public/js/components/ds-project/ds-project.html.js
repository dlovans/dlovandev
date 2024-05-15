// Create template object.
export const template = document.createElement('template')

// Populate template content fragment.
template.innerHTML = `
    <h3 class="project-title"></h3>
    <a href="">
        Live App
       <svg height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.001 512.001" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#003DA8;" d="M507.569,111.327c-7.433-12.924-22.52-19.476-44.847-19.476c-0.16,0-0.322,0-0.483,0.001 c-14.687,0.062-32.769,2.893-53.853,8.405l4.84,18.042l18.337,8.726c35.157-7.266,47.58-2.193,48.809-0.058 c1.227,2.135-0.633,15.421-24.592,42.151c4.789,10.975,8.611,22.175,11.479,33.497c15.408-15.492,26.969-29.731,34.406-42.416 C513.056,140.766,515.043,124.322,507.569,111.327z"></path> <path style="fill:#2F91ED;" d="M80.44,384.976c-35.16,7.268-47.583,2.191-48.809,0.056c-1.228-2.134,0.632-15.42,24.592-42.151 l3.161-22.822l-14.64-10.674c-15.409,15.492-26.969,29.731-34.407,42.417c-11.392,19.435-13.378,35.878-5.905,48.872 c7.433,12.926,22.518,19.478,44.843,19.478c0.121,0,0.245-0.001,0.368-0.001c14.707-0.047,32.83-2.879,53.973-8.406 C95.272,403.572,87.517,394.634,80.44,384.976z"></path> <path style="fill:#FF8E00;" d="M444.848,147.397c-40.261-70.008-113.5-109.209-188.847-109.28l-21.472,222.999l21.472,212.767 c36.905,0.035,74.314-9.316,108.603-29.036C468.901,384.868,504.828,251.694,444.848,147.397z"></path> <path style="fill:#FFBA00;" d="M147.397,67.153C43.099,127.133,7.173,260.307,67.153,364.604 c40.261,70.008,113.5,109.21,188.847,109.28V38.117C219.096,38.083,181.687,47.433,147.397,67.153z"></path> <path style="fill:#FDE09C;" d="M383.374,182.75c-19.566-34.022-51.21-58.389-89.102-68.611c-25.429-6.861-52.169-6.797-77.33,0.178 l-8.381-30.235c30.572-8.475,63.037-8.555,93.884-0.235c45.984,12.405,84.386,41.975,108.129,83.262L383.374,182.75z"></path> <path style="fill:#003DA8;" d="M458.427,211.241c3.077-2.918,6.01-5.79,8.83-8.624l3.14-22.44l-14.619-11.058 c-5.208,5.812-11.444,12.247-18.939,19.353c-37.368,35.431-91.749,74.455-153.324,110.055l2.814,19.177l20.127,3.765 C367.137,285.807,420.82,246.9,458.427,211.241z"></path> <path style="fill:#2F91ED;" d="M283.515,298.528c-0.766,0.442-1.526,0.887-2.294,1.328c-62.52,35.954-124.506,63.828-174.538,78.486 c-9.908,2.903-18.603,5.055-26.244,6.634l1.352,17.879l21.824,8.89c3.866-1.011,7.822-2.101,11.889-3.292 c52.343-15.334,116.75-44.242,181.357-81.397c3.219-1.851,6.414-3.715,9.596-5.584L283.515,298.528z"></path> </g></svg>
       <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M14 5C13.4477 5 13 4.55228 13 4C13 3.44772 13.4477 3 14 3H20C20.5523 3 21 3.44772 21 4V10C21 10.5523 20.5523 11 20 11C19.4477 11 19 10.5523 19 10V6.41421L11.7071 13.7071C11.3166 14.0976 10.6834 14.0976 10.2929 13.7071C9.90237 13.3166 9.90237 12.6834 10.2929 12.2929L17.5858 5H14ZM5 7C4.44772 7 4 7.44772 4 8V19C4 19.5523 4.44772 20 5 20H16C16.5523 20 17 19.5523 17 19V14.4375C17 13.8852 17.4477 13.4375 18 13.4375C18.5523 13.4375 19 13.8852 19 14.4375V19C19 20.6569 17.6569 22 16 22H5C3.34315 22 2 20.6569 2 19V8C2 6.34315 3.34315 5 5 5H9.5625C10.1148 5 10.5625 5.44772 10.5625 6C10.5625 6.55228 10.1148 7 9.5625 7H5Z" fill="#000000"></path> </g></svg>
    </a>
    <a href="">
        Repository
        <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>icon/24/icon-conter</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Output-svg" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="out" transform="translate(-798.000000, -106.000000)" fill="#00b7ff"> <path d="M813.0191,120.3981 C812.5581,120.3981 812.1831,120.7981 812.1831,121.2921 C812.1831,121.7851 812.5581,122.1851 813.0191,122.1851 C813.4801,122.1851 813.8551,121.7851 813.8551,121.2921 C813.8551,120.7981 813.4801,120.3981 813.0191,120.3981 M817.5691,125.7301 L814.4581,125.7301 C813.3431,125.7301 812.4361,124.8271 812.4361,123.7161 L812.4361,123.4211 C811.5321,123.1611 810.8951,122.2971 810.8951,121.2921 C810.8951,120.0741 811.8461,119.0831 813.0151,119.0831 C814.1761,119.0831 815.1211,120.0741 815.1211,121.2921 C815.1211,122.2341 814.5521,123.0631 813.7171,123.3721 L813.7171,123.7161 C813.7171,124.0971 814.0491,124.4071 814.4581,124.4071 L817.5691,124.4071 C817.9201,124.4071 818.2061,124.7041 818.2061,125.0691 C818.2061,125.4331 817.9201,125.7301 817.5691,125.7301 Z M816.3902,118.504 C815.4672,118.504 814.6492,117.862 814.3762,116.952 L813.4382,116.952 C812.3292,116.952 811.3942,116.027 811.3942,114.933 L811.3942,111.056 C811.3942,110.625 811.1402,110.323 810.7772,110.323 L807.2492,110.323 C806.8982,110.323 806.6132,110.026 806.6132,109.662 C806.6132,109.297 806.8982,109 807.2492,109 L810.7772,109 C811.8412,109 812.6752,109.903 812.6752,111.056 L812.6752,114.933 C812.6752,115.311 813.0252,115.629 813.4382,115.629 L814.3752,115.629 C814.6432,114.709 815.4452,114.083 816.3902,114.083 C817.5532,114.083 818.4992,115.075 818.4992,116.294 C818.4992,117.513 817.5532,118.504 816.3902,118.504 Z M816.3902,115.399 C815.9292,115.399 815.5542,115.8 815.5542,116.293 C815.5542,116.786 815.9292,117.187 816.3902,117.187 C816.8502,117.187 817.2252,116.786 817.2252,116.293 C817.2252,115.8 816.8502,115.399 816.3902,115.399 Z M809.301,127.5003 C808.948,127.5003 808.66,127.2053 808.66,126.8423 L808.66,114.3263 C808.66,113.9203 808.369,113.6153 807.984,113.6153 L804.107,113.6153 C803.82,114.5113 803.024,115.1203 802.109,115.1203 C800.946,115.1203 800,114.1343 800,112.9203 C800,111.6983 800.946,110.7033 802.109,110.7033 C803.062,110.7033 803.885,111.3603 804.138,112.2923 L807.984,112.2923 C809.082,112.2923 809.942,113.1853 809.942,114.3263 L809.942,126.8423 C809.942,127.2053 809.654,127.5003 809.301,127.5003 Z M802.109,112.0353 C801.649,112.0353 801.274,112.4363 801.274,112.9293 C801.274,113.4223 801.649,113.8233 802.109,113.8233 C802.57,113.8233 802.945,113.4223 802.945,112.9293 C802.945,112.4363 802.57,112.0353 802.109,112.0353 Z M803.9913,125.7306 L800.8863,125.7306 C800.5353,125.7306 800.2493,125.4336 800.2493,125.0686 C800.2493,124.7036 800.5353,124.4066 800.8863,124.4066 L803.9913,124.4066 C804.3703,124.4066 804.6243,124.1296 804.6243,123.7166 L804.6243,120.1166 C803.7683,119.8196 803.1873,118.9856 803.1873,118.0216 C803.1873,116.8036 804.1353,115.8126 805.3023,115.8126 C806.4643,115.8126 807.4103,116.8036 807.4103,118.0216 C807.4103,118.9796 806.7763,119.8526 805.9053,120.1356 L805.9053,123.7166 C805.9053,124.8646 805.0823,125.7306 803.9913,125.7306 Z M805.3023,117.1276 C804.8413,117.1276 804.4663,117.5286 804.4663,118.0216 C804.4663,118.5146 804.8413,118.9156 805.3023,118.9156 C805.7623,118.9156 806.1373,118.5146 806.1373,118.0216 C806.1373,117.5286 805.7623,117.1276 805.3023,117.1276 Z" id="path"> </path> </g> </g> </g></svg>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M14 5C13.4477 5 13 4.55228 13 4C13 3.44772 13.4477 3 14 3H20C20.5523 3 21 3.44772 21 4V10C21 10.5523 20.5523 11 20 11C19.4477 11 19 10.5523 19 10V6.41421L11.7071 13.7071C11.3166 14.0976 10.6834 14.0976 10.2929 13.7071C9.90237 13.3166 9.90237 12.6834 10.2929 12.2929L17.5858 5H14ZM5 7C4.44772 7 4 7.44772 4 8V19C4 19.5523 4.44772 20 5 20H16C16.5523 20 17 19.5523 17 19V14.4375C17 13.8852 17.4477 13.4375 18 13.4375C18.5523 13.4375 19 13.8852 19 14.4375V19C19 20.6569 17.6569 22 16 22H5C3.34315 22 2 20.6569 2 19V8C2 6.34315 3.34315 5 5 5H9.5625C10.1148 5 10.5625 5.44772 10.5625 6C10.5625 6.55228 10.1148 7 9.5625 7H5Z" fill="#000000"></path> </g></svg>
    </a>
`