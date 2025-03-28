"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.materialTheme=void 0;var _styles=require("@material-ui/core/styles"),materialTheme=(0,_styles.createMuiTheme)({overrides:{MuiPopover:{root:{zIndex:"100001 !important"}},MuiInputBase:{root:{"&.Mui-disabled":{color:"rgba(0, 0, 0, 0.87)"},"font-size":"14px",color:"#5a5a5a"},input:{"padding-top":"10px"}},MuiIconButton:{root:{padding:"0","font-size":"14px"}},MuiDialog:{root:{zIndex:9999999}},MuiTypography:{h3:{"font-size":"2.6rem"}},MuiPaper:{elevation1:{"box-shadow":"none"}},MuiFormLabel:{root:{color:"#707070","font-size":"16px","font-weight":"500 !important","text-transform":"uppercase"}},MuiInput:{underline:{"&::before":{"border-bottom":"none"},"&.Mui-disabled":{"&::before":{"border-bottom-style":"none"}}}}},palette:{primary:{main:"#0094CA"},error:{main:"#E34259"}},typography:{htmlFontSize:13},MuiPickersCalendarHeader:{iconButton:{padding:"12px","font-size":"1.84rem"}},MuiPickerDTTabs:{tabs:{backgroundColor:"#ffffff",color:"#000000"}},PrivateTabIndicator:{colorSecondary:{"background-color":"#0094CA"}}});exports.materialTheme=materialTheme;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtYXRlcmlhbFRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJvdmVycmlkZXMiLCJNdWlQb3BvdmVyIiwicm9vdCIsInpJbmRleCIsIk11aUlucHV0QmFzZSIsImNvbG9yIiwiaW5wdXQiLCJNdWlJY29uQnV0dG9uIiwicGFkZGluZyIsIk11aURpYWxvZyIsIk11aVR5cG9ncmFwaHkiLCJoMyIsIk11aVBhcGVyIiwiZWxldmF0aW9uMSIsIk11aUZvcm1MYWJlbCIsIk11aUlucHV0IiwidW5kZXJsaW5lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwiZXJyb3IiLCJ0eXBvZ3JhcGh5IiwiaHRtbEZvbnRTaXplIiwiTXVpUGlja2Vyc0NhbGVuZGFySGVhZGVyIiwiaWNvbkJ1dHRvbiIsIk11aVBpY2tlckRUVGFicyIsInRhYnMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJQcml2YXRlVGFiSW5kaWNhdG9yIiwiY29sb3JTZWNvbmRhcnkiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9maWx0ZXJzL2NvbXBvbmVudHMvZGF0ZS1yYW5nZS9tYXRlcmlhbFRoZW1lLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lT3B0aW9ucyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXG5cbmV4cG9ydCBjb25zdCBtYXRlcmlhbFRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBvdmVycmlkZXM6IHtcbiAgICBNdWlQb3BvdmVyOiB7XG4gICAgICByb290OiB7XG4gICAgICAgIHpJbmRleDogJzEwMDAwMSAhaW1wb3J0YW50JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdWlJbnB1dEJhc2U6IHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgJyYuTXVpLWRpc2FibGVkJzoge1xuICAgICAgICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjg3KScsXG4gICAgICAgIH0sXG4gICAgICAgICdmb250LXNpemUnOiAnMTRweCcsXG4gICAgICAgIGNvbG9yOiAnIzVhNWE1YScsXG4gICAgICB9LFxuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgJ3BhZGRpbmctdG9wJzogJzEwcHgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aUljb25CdXR0b246IHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgcGFkZGluZzogJzAnLFxuICAgICAgICAnZm9udC1zaXplJzogJzE0cHgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aURpYWxvZzoge1xuICAgICAgcm9vdDoge1xuICAgICAgICB6SW5kZXg6IDk5OTk5OTksXG4gICAgICB9LFxuICAgIH0sXG4gICAgTXVpVHlwb2dyYXBoeToge1xuICAgICAgaDM6IHtcbiAgICAgICAgJ2ZvbnQtc2l6ZSc6ICcyLjZyZW0nLFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aVBhcGVyOiB7XG4gICAgICBlbGV2YXRpb24xOiB7XG4gICAgICAgICdib3gtc2hhZG93JzogJ25vbmUnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aUZvcm1MYWJlbDoge1xuICAgICAgcm9vdDoge1xuICAgICAgICBjb2xvcjogJyM3MDcwNzAnLFxuICAgICAgICAnZm9udC1zaXplJzogJzE2cHgnLFxuICAgICAgICAnZm9udC13ZWlnaHQnOiAnNTAwICFpbXBvcnRhbnQnLFxuICAgICAgICAndGV4dC10cmFuc2Zvcm0nOiAndXBwZXJjYXNlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdWlJbnB1dDoge1xuICAgICAgdW5kZXJsaW5lOiB7XG4gICAgICAgICcmOjpiZWZvcmUnOiB7XG4gICAgICAgICAgJ2JvcmRlci1ib3R0b20nOiAnbm9uZScsXG4gICAgICAgIH0sXG4gICAgICAgICcmLk11aS1kaXNhYmxlZCc6IHtcbiAgICAgICAgICAnJjo6YmVmb3JlJzoge1xuICAgICAgICAgICAgJ2JvcmRlci1ib3R0b20tc3R5bGUnOiAnbm9uZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46ICcjMDA5NENBJyxcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBtYWluOiAnI0UzNDI1OScsXG4gICAgfSxcbiAgfSxcbiAgdHlwb2dyYXBoeToge1xuICAgIGh0bWxGb250U2l6ZTogMTMsXG4gIH0sXG4gIE11aVBpY2tlcnNDYWxlbmRhckhlYWRlcjoge1xuICAgIGljb25CdXR0b246IHtcbiAgICAgIHBhZGRpbmc6ICcxMnB4JyxcbiAgICAgICdmb250LXNpemUnOiAnMS44NHJlbScsXG4gICAgfSxcbiAgfSxcbiAgTXVpUGlja2VyRFRUYWJzOiB7XG4gICAgdGFiczoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICBjb2xvcjogJyMwMDAwMDAnLFxuICAgIH0sXG4gIH0sXG4gIFByaXZhdGVUYWJJbmRpY2F0b3I6IHtcbiAgICBjb2xvclNlY29uZGFyeToge1xuICAgICAgJ2JhY2tncm91bmQtY29sb3InOiAnIzAwOTRDQScsXG4gICAgfSxcbiAgfSxcbn0gYXMgVGhlbWVPcHRpb25zKVxuIl0sIm1hcHBpbmdzIjoiaUpBR2FBLGFBQWEsQ0FBRyxHQUFBQyxzQkFBYyxFQUFDLENBQzFDQyxTQUFTLENBQUUsQ0FDVEMsVUFBVSxDQUFFLENBQ1ZDLElBQUksQ0FBRSxDQUNKQyxNQUFNLENBQUUsbUJBQ1YsQ0FDRixDQUFDLENBQ0RDLFlBQVksQ0FBRSxDQUNaRixJQUFJLENBQUUsQ0FDSixpQkFBa0IsQ0FDaEJHLEtBQUssQ0FBRSxxQkFDVCxDQUFDLENBQ0QsWUFBYSxNQUFNLENBQ25CQSxLQUFLLENBQUUsU0FDVCxDQUFDLENBQ0RDLEtBQUssQ0FBRSxDQUNMLGNBQWUsTUFDakIsQ0FDRixDQUFDLENBQ0RDLGFBQWEsQ0FBRSxDQUNiTCxJQUFJLENBQUUsQ0FDSk0sT0FBTyxDQUFFLEdBQUcsQ0FDWixZQUFhLE1BQ2YsQ0FDRixDQUFDLENBQ0RDLFNBQVMsQ0FBRSxDQUNUUCxJQUFJLENBQUUsQ0FDSkMsTUFBTSxDQUFFLE9BQ1YsQ0FDRixDQUFDLENBQ0RPLGFBQWEsQ0FBRSxDQUNiQyxFQUFFLENBQUUsQ0FDRixZQUFhLFFBQ2YsQ0FDRixDQUFDLENBQ0RDLFFBQVEsQ0FBRSxDQUNSQyxVQUFVLENBQUUsQ0FDVixhQUFjLE1BQ2hCLENBQ0YsQ0FBQyxDQUNEQyxZQUFZLENBQUUsQ0FDWlosSUFBSSxDQUFFLENBQ0pHLEtBQUssQ0FBRSxTQUFTLENBQ2hCLFlBQWEsTUFBTSxDQUNuQixjQUFlLGdCQUFnQixDQUMvQixpQkFBa0IsV0FDcEIsQ0FDRixDQUFDLENBQ0RVLFFBQVEsQ0FBRSxDQUNSQyxTQUFTLENBQUUsQ0FDVCxZQUFhLENBQ1gsZ0JBQWlCLE1BQ25CLENBQUMsQ0FDRCxpQkFBa0IsQ0FDaEIsWUFBYSxDQUNYLHNCQUF1QixNQUN6QixDQUNGLENBQ0YsQ0FDRixDQUNGLENBQUMsQ0FDREMsT0FBTyxDQUFFLENBQ1BDLE9BQU8sQ0FBRSxDQUNQQyxJQUFJLENBQUUsU0FDUixDQUFDLENBQ0RDLEtBQUssQ0FBRSxDQUNMRCxJQUFJLENBQUUsU0FDUixDQUNGLENBQUMsQ0FDREUsVUFBVSxDQUFFLENBQ1ZDLFlBQVksQ0FBRSxFQUNoQixDQUFDLENBQ0RDLHdCQUF3QixDQUFFLENBQ3hCQyxVQUFVLENBQUUsQ0FDVmhCLE9BQU8sQ0FBRSxNQUFNLENBQ2YsWUFBYSxTQUNmLENBQ0YsQ0FBQyxDQUNEaUIsZUFBZSxDQUFFLENBQ2ZDLElBQUksQ0FBRSxDQUNKQyxlQUFlLENBQUUsU0FBUyxDQUMxQnRCLEtBQUssQ0FBRSxTQUNULENBQ0YsQ0FBQyxDQUNEdUIsbUJBQW1CLENBQUUsQ0FDbkJDLGNBQWMsQ0FBRSxDQUNkLG1CQUFvQixTQUN0QixDQUNGLENBQ0YsQ0FBQyxDQUFpQiJ9