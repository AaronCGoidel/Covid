import React, { useState } from "react";
import {
  ResourceButton,
  ResourceContainer,
  ResourceText,
  ResourceIcon,
} from "./styles";

const ResourceButtons = (props) => {
  return (
    <ResourceContainer>
      <ResourceButton
        onClick={() => (
          props.setModal(true), props.setTitleText("Info About Vaccines")
        )}
      >
        <ResourceIcon>
          <svg
            width="31"
            height="28"
            viewBox="0 0 31 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.1948 9.47712L14.9312 12.502C14.7495 12.67 14.7495 12.9465 14.9312 13.1146L15.5933 13.7271C15.7749 13.8952 16.0737 13.8952 16.2554 13.7271L19.519 10.7022L22.1733 13.1579L18.9038 16.1828C18.7222 16.3508 18.7222 16.6273 18.9038 16.7954L19.5659 17.4079C19.7476 17.576 20.0464 17.576 20.228 17.4079L23.4976 14.3776L25.0444 15.8087C26.0581 16.7466 26.5444 18.0367 26.3921 19.354L25.9761 22.8017L29.8667 26.4012C30.0483 26.5693 30.0483 26.8457 29.8667 27.0138L29.2046 27.6263C29.0229 27.7944 28.7241 27.7944 28.5425 27.6263L24.6577 24.0323L20.9312 24.4172C19.5308 24.5581 18.1245 24.1244 17.0991 23.1704L6.44092 13.3097L14.3921 5.95352L18.1948 9.47712ZM0.13623 4.4194L4.77686 0.126036C4.9585 -0.0420121 5.25732 -0.0420121 5.43896 0.126036L6.10107 0.7386C6.28271 0.906648 6.28271 1.18311 6.10107 1.35116L4.44287 2.88528L7.09717 5.34096L10.4136 2.27272L11.4097 1.35116C11.5913 1.18311 11.8901 1.18311 12.0718 1.35116L14.0581 3.18885C14.2397 3.3569 14.2397 3.63337 14.0581 3.80142L13.062 4.72297L5.11084 12.09L4.11475 13.0116C3.93311 13.1796 3.63428 13.1796 3.45264 13.0116L1.46631 11.1684C1.28467 11.0004 1.28467 10.7239 1.46631 10.5559L5.77295 6.57151L3.11865 4.11583L1.46045 5.64995C1.27881 5.818 0.97998 5.818 0.79834 5.64995L0.13623 5.03739C-0.0454102 4.86392 -0.0454102 4.59287 0.13623 4.4194Z"
              fill="black"
            />
          </svg>
        </ResourceIcon>
        <ResourceText>Info About Vaccines</ResourceText>
      </ResourceButton>
      <ResourceButton
        onClick={() => (
          props.setModal(true), props.setTitleText("About Covid-19")
        )}
      >
        <ResourceIcon>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.66699 13.333H2.92969C5.89922 13.333 7.38691 9.74298 5.28691 7.64298L4.39453 6.74942C4.10029 6.43348 3.94015 6.01567 3.94785 5.584C3.95555 5.15233 4.13049 4.74049 4.43581 4.43524C4.74113 4.13 5.15301 3.95516 5.58468 3.94757C6.01636 3.93998 6.43413 4.10022 6.75 4.39454L7.64297 5.28633C9.74297 7.38575 13.333 5.89864 13.333 2.92911V1.66641C13.333 1.2243 13.5086 0.800293 13.8213 0.487671C14.1339 0.175049 14.5579 -0.000579834 15 -0.000579834C15.4421 -0.000579834 15.8661 0.175049 16.1787 0.487671C16.4914 0.800293 16.667 1.2243 16.667 1.66641V2.92969C16.667 5.89923 20.257 7.38634 22.357 5.28692L23.25 4.39454C23.5659 4.10022 23.9836 3.93998 24.4153 3.94757C24.847 3.95516 25.2589 4.13 25.5642 4.43524C25.8695 4.74049 26.0444 5.15233 26.0521 5.584C26.0598 6.01567 25.8997 6.43348 25.6055 6.74942L24.7119 7.64298C22.6119 9.74298 24.0996 13.333 27.0691 13.333H28.333C28.5545 13.3289 28.7746 13.3689 28.9805 13.4508C29.1863 13.5327 29.3738 13.6548 29.5319 13.81C29.69 13.9652 29.8156 14.1503 29.9014 14.3546C29.9871 14.5589 30.0312 14.7782 30.0312 14.9997C30.0312 15.2213 29.9871 15.4406 29.9014 15.6449C29.8156 15.8491 29.69 16.0343 29.5319 16.1895C29.3738 16.3446 29.1863 16.4667 28.9805 16.5486C28.7746 16.6305 28.5545 16.6706 28.333 16.6664H27.0703C24.1008 16.6664 22.6131 20.257 24.7131 22.357L25.6055 23.25C25.8968 23.5665 26.0545 23.9834 26.0457 24.4135C26.0368 24.8436 25.8619 25.2536 25.5578 25.5578C25.2536 25.862 24.8436 26.0368 24.4135 26.0457C23.9834 26.0546 23.5665 25.8968 23.25 25.6055L22.357 24.7119C20.257 22.6119 16.667 24.0996 16.667 27.0692V28.3313C16.667 28.7734 16.4914 29.1974 16.1787 29.51C15.8661 29.8226 15.4421 29.9983 15 29.9983C14.5579 29.9983 14.1339 29.8226 13.8213 29.51C13.5086 29.1974 13.333 28.7734 13.333 28.3313V27.0703C13.333 24.1008 9.74297 22.6131 7.64297 24.7131L6.75 25.6055C6.4335 25.8968 6.01662 26.0546 5.58652 26.0457C5.15643 26.0368 4.74643 25.862 4.44224 25.5578C4.13805 25.2536 3.96324 24.8436 3.95434 24.4135C3.94545 23.9834 4.10317 23.5665 4.39453 23.25L5.28808 22.357C7.38808 20.257 5.90039 16.6664 2.93086 16.6664H1.66875C1.44725 16.6706 1.22714 16.6305 1.02129 16.5486C0.815435 16.4667 0.627974 16.3446 0.469858 16.1895C0.311741 16.0343 0.186144 15.8491 0.100405 15.6449C0.0146656 15.4406 -0.0294971 15.2213 -0.0294971 14.9997C-0.0294971 14.7782 0.0146656 14.5589 0.100405 14.3546C0.186144 14.1503 0.311741 13.9652 0.469858 13.81C0.627974 13.6548 0.815435 13.5327 1.02129 13.4508C1.22714 13.3689 1.44725 13.3289 1.66875 13.333H1.66699ZM16.875 15.9375C17.4313 15.9375 17.975 15.7726 18.4375 15.4635C18.9001 15.1545 19.2605 14.7152 19.4734 14.2013C19.6863 13.6874 19.742 13.1219 19.6335 12.5763C19.5249 12.0307 19.2571 11.5296 18.8637 11.1363C18.4704 10.7429 17.9693 10.4751 17.4237 10.3665C16.8781 10.258 16.3126 10.3137 15.7987 10.5266C15.2848 10.7395 14.8455 11.1 14.5365 11.5625C14.2274 12.025 14.0625 12.5687 14.0625 13.125C14.0625 13.8709 14.3588 14.5863 14.8863 15.1137C15.4137 15.6412 16.1291 15.9375 16.875 15.9375ZM12.1875 19.2188C12.4656 19.2188 12.7375 19.1363 12.9688 18.9818C13.2 18.8272 13.3803 18.6076 13.4867 18.3507C13.5931 18.0937 13.621 17.8109 13.5667 17.5382C13.5125 17.2654 13.3785 17.0148 13.1819 16.8181C12.9852 16.6215 12.7346 16.4875 12.4618 16.4333C12.1891 16.379 11.9063 16.4069 11.6494 16.5133C11.3924 16.6197 11.1728 16.8 11.0182 17.0312C10.8637 17.2625 10.7812 17.5344 10.7812 17.8125C10.7812 18.1855 10.9294 18.5432 11.1931 18.8069C11.4569 19.0706 11.8145 19.2188 12.1875 19.2188Z"
              fill="black"
            />
          </svg>
        </ResourceIcon>
        <ResourceText>About Covid&#8209;19</ResourceText>
      </ResourceButton>
      <ResourceButton
        onClick={() => (
          props.setModal(true), props.setTitleText("Testing Info Around Me")
        )}
      >
        <ResourceIcon>
          <svg
            width="30"
            height="32"
            viewBox="0 0 30 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.4286 15.25V12.75C21.4286 12.3358 21.0688 12 20.625 12H17.9464C17.5027 12 17.1429 12.3358 17.1429 12.75V15.25C17.1429 15.6642 17.5027 16 17.9464 16H20.625C21.0688 16 21.4286 15.6642 21.4286 15.25ZM12.0536 16H9.375C8.93123 16 8.57143 15.6642 8.57143 15.25V12.75C8.57143 12.3358 8.93123 12 9.375 12H12.0536C12.4973 12 12.8571 12.3358 12.8571 12.75V15.25C12.8571 15.6642 12.4973 16 12.0536 16ZM17.1429 21.25V18.75C17.1429 18.3358 17.5027 18 17.9464 18H20.625C21.0688 18 21.4286 18.3358 21.4286 18.75V21.25C21.4286 21.6642 21.0688 22 20.625 22H17.9464C17.5027 22 17.1429 21.6642 17.1429 21.25ZM12.0536 22H9.375C8.93123 22 8.57143 21.6642 8.57143 21.25V18.75C8.57143 18.3358 8.93123 18 9.375 18H12.0536C12.4973 18 12.8571 18.3358 12.8571 18.75V21.25C12.8571 21.6642 12.4973 22 12.0536 22ZM0 29.75V32H30V29.75C30 29.3358 29.6402 29 29.1964 29H27.8906V5.31469C27.8906 4.58863 27.1711 4 26.2835 4H20.3571V1.5C20.3571 0.671562 19.6376 0 18.75 0H11.25C10.3624 0 9.64286 0.671562 9.64286 1.5V4H3.71652C2.82891 4 2.10938 4.58863 2.10938 5.31469V29H0.803572C0.3598 29 0 29.3358 0 29.75ZM24.6763 28.9375H17.1429V24.75C17.1429 24.3358 16.7831 24 16.3393 24H13.6607C13.2169 24 12.8571 24.3358 12.8571 24.75V28.9375H5.32366V7H9.64286V8.5C9.64286 9.32844 10.3624 10 11.25 10H18.75C19.6376 10 20.3571 9.32844 20.3571 8.5V7H24.6763V28.9375ZM12.1875 4H13.9286V2.375C13.9286 2.27554 13.9709 2.18016 14.0463 2.10983C14.1216 2.03951 14.2238 2 14.3304 2H15.6696C15.7762 2 15.8784 2.03951 15.9537 2.10983C16.0291 2.18016 16.0714 2.27554 16.0714 2.375V4H17.8125C17.9191 4 18.0213 4.03951 18.0966 4.10984C18.172 4.18016 18.2143 4.27554 18.2143 4.375V5.625C18.2143 5.72446 18.172 5.81984 18.0966 5.89016C18.0213 5.96049 17.9191 6 17.8125 6H16.0714V7.625C16.0714 7.72446 16.0291 7.81984 15.9537 7.89016C15.8784 7.96049 15.7762 8 15.6696 8H14.3304C14.2238 8 14.1216 7.96049 14.0463 7.89016C13.9709 7.81984 13.9286 7.72446 13.9286 7.625V6H12.1875C12.0809 6 11.9787 5.96049 11.9034 5.89016C11.828 5.81984 11.7857 5.72446 11.7857 5.625V4.375C11.7857 4.27554 11.828 4.18016 11.9034 4.10984C11.9787 4.03951 12.0809 4 12.1875 4Z"
              fill="black"
            />
          </svg>
        </ResourceIcon>
        <ResourceText>Testing Info Around Me</ResourceText>
      </ResourceButton>
      <ResourceButton
        onClick={() => (
          props.setModal(true), props.setTitleText("Report a Case in the House")
        )}
      >
        <ResourceIcon>
          <svg
            width="30"
            height="27"
            viewBox="0 0 30 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.8752 7.94602V0.84375C13.8752 0.619974 13.9542 0.405362 14.0949 0.247129C14.2356 0.0888949 14.4263 0 14.6252 0L15.3752 0C15.5741 0 15.7649 0.0888949 15.9056 0.247129C16.0462 0.405362 16.1252 0.619974 16.1252 0.84375V7.94602C15.7857 7.71553 15.3968 7.59372 15.0002 7.59372C14.6037 7.59372 14.2147 7.71553 13.8752 7.94602ZM20.8343 23.4383C21.2555 22.9632 21.4921 22.3196 21.4921 21.6485C21.4921 20.9775 21.2555 20.3338 20.8343 19.8587L20.4321 19.4062H21.0002C21.597 19.4062 22.1693 19.1396 22.5912 18.6649C23.0132 18.1902 23.2502 17.5463 23.2502 16.875C23.2502 16.2037 23.0132 15.5598 22.5912 15.0851C22.1693 14.6104 21.597 14.3438 21.0002 14.3438H20.4321L20.8343 13.8918C21.2316 13.4488 21.468 12.8551 21.4972 12.2266C21.5265 11.5981 21.3467 10.9799 20.9927 10.4926C20.6388 10.0052 20.1361 9.68364 19.5829 9.59062C19.0296 9.49761 18.4654 9.63981 18.0002 9.98947V8.52979C18.0002 6.61184 19.4712 5.0625 21.2815 5.0625C23.344 5.0625 24.0002 6.56543 25.0371 8.39162C27.1807 12.1499 28.7936 16.2592 29.8184 20.5733C29.9401 21.0826 30.0012 21.6078 30.0002 22.1353C30.0002 25.3652 27.0705 27.6993 24.1291 26.8091L21.3401 25.9722C20.3637 25.6807 19.4992 25.0369 18.8791 24.1397C19.2312 24.2124 19.5937 24.1864 19.9347 24.0641C20.2757 23.9418 20.5847 23.7269 20.8343 23.4383ZM10.2269 22.2449C10.0864 22.0867 10.0075 21.8722 10.0075 21.6485C10.0075 21.4248 10.0864 21.2103 10.2269 21.0521L10.6291 20.5996C11.5741 19.5365 10.9048 17.7188 9.56836 17.7188H9.00023C8.80132 17.7188 8.61055 17.6299 8.4699 17.4716C8.32925 17.3134 8.25023 17.0988 8.25023 16.875C8.25023 16.6512 8.32925 16.4366 8.4699 16.2784C8.61055 16.1201 8.80132 16.0312 9.00023 16.0312H9.56836C10.9048 16.0312 11.5741 14.2135 10.6291 13.1509L10.2269 12.6984C10.0863 12.5402 10.0073 12.3256 10.0073 12.1017C10.0073 11.8779 10.0863 11.6633 10.2269 11.5051C10.3676 11.3468 10.5584 11.2579 10.7573 11.2579C10.9563 11.2579 11.1471 11.3468 11.2877 11.5051L11.6894 11.9575C12.6344 13.0206 14.2502 12.2676 14.2502 10.7641V10.125C14.2502 9.90122 14.3292 9.68661 14.4699 9.52838C14.6106 9.37014 14.8013 9.28125 15.0002 9.28125C15.1991 9.28125 15.3899 9.37014 15.5306 9.52838C15.6712 9.68661 15.7502 9.90122 15.7502 10.125V10.7641C15.7502 12.2676 17.366 13.0206 18.311 11.9575L18.7127 11.5051C18.8534 11.3468 19.0442 11.2579 19.2431 11.2579C19.4421 11.2579 19.6328 11.3468 19.7735 11.5051C19.9142 11.6633 19.9932 11.8779 19.9932 12.1017C19.9932 12.3256 19.9142 12.5402 19.7735 12.6984L19.3713 13.1509C18.4263 14.2135 19.0957 16.0312 20.4321 16.0312H21.0002C21.1991 16.0312 21.3899 16.1201 21.5306 16.2784C21.6712 16.4366 21.7502 16.6512 21.7502 16.875C21.7502 17.0988 21.6712 17.3134 21.5306 17.4716C21.3899 17.6299 21.1991 17.7188 21.0002 17.7188H20.4321C19.0957 17.7188 18.4263 19.5365 19.3713 20.5996L19.7735 21.0521C19.8448 21.13 19.9016 21.2231 19.9407 21.326C19.9797 21.4289 20.0001 21.5394 20.0009 21.6513C20.0016 21.7631 19.9825 21.874 19.9448 21.9774C19.907 22.0809 19.8514 22.1749 19.7811 22.254C19.7108 22.3331 19.6272 22.3956 19.5352 22.438C19.4432 22.4804 19.3446 22.5018 19.2452 22.501C19.1458 22.5001 19.0475 22.4771 18.9561 22.4331C18.8647 22.3891 18.782 22.3252 18.7127 22.2449L18.311 21.793C17.366 20.7299 15.7502 21.4829 15.7502 22.9859V23.625C15.7502 23.8488 15.6712 24.0634 15.5306 24.2216C15.3899 24.3799 15.1991 24.4688 15.0002 24.4688C14.8013 24.4688 14.6106 24.3799 14.4699 24.2216C14.3292 24.0634 14.2502 23.8488 14.2502 23.625V22.9859C14.2502 21.4829 12.6344 20.7299 11.6894 21.793L11.2877 22.2449C11.2181 22.3233 11.1354 22.3855 11.0444 22.4279C10.9534 22.4703 10.8558 22.4921 10.7573 22.4921C10.6588 22.4921 10.5613 22.4703 10.4703 22.4279C10.3793 22.3855 10.2966 22.3233 10.2269 22.2449ZM16.5002 16.0312C16.6486 16.0312 16.7936 15.9818 16.9169 15.8891C17.0402 15.7963 17.1364 15.6646 17.1931 15.5104C17.2499 15.3562 17.2648 15.1866 17.2358 15.0229C17.2069 14.8592 17.1355 14.7089 17.0306 14.5909C16.9257 14.4729 16.792 14.3925 16.6466 14.36C16.5011 14.3274 16.3503 14.3441 16.2132 14.408C16.0762 14.4718 15.959 14.58 15.8766 14.7187C15.7942 14.8575 15.7502 15.0206 15.7502 15.1875C15.7502 15.4113 15.8292 15.6259 15.9699 15.7841C16.1106 15.9424 16.3013 16.0312 16.5002 16.0312ZM13.5002 19.4062C13.6486 19.4062 13.7936 19.3568 13.9169 19.2641C14.0402 19.1713 14.1364 19.0396 14.1931 18.8854C14.2499 18.7312 14.2648 18.5616 14.2358 18.3979C14.2069 18.2342 14.1355 18.0839 14.0306 17.9659C13.9257 17.8479 13.792 17.7675 13.6465 17.735C13.5011 17.7024 13.3503 17.7191 13.2132 17.783C13.0762 17.8468 12.959 17.955 12.8766 18.0937C12.7942 18.2325 12.7502 18.3956 12.7502 18.5625C12.7502 18.7863 12.8292 19.0009 12.9699 19.1591C13.1106 19.3174 13.3013 19.4062 13.5002 19.4062ZM0.182106 20.5733C1.20687 16.2592 2.81976 12.1499 4.96336 8.39162C6.00023 6.56543 6.65648 5.0625 8.71898 5.0625C10.5293 5.0625 12.0002 6.61184 12.0002 8.52979V9.99158C11.5351 9.64192 10.9709 9.49972 10.4176 9.59273C9.86432 9.68575 9.36168 10.0073 9.00774 10.4947C8.65379 10.982 8.47392 11.6002 8.50321 12.2287C8.53251 12.8572 8.76886 13.4509 9.16617 13.8939L9.56836 14.3438H9.00023C8.40349 14.3438 7.8312 14.6104 7.40924 15.0851C6.98728 15.5598 6.75023 16.2037 6.75023 16.875C6.75023 17.5463 6.98728 18.1902 7.40924 18.6649C7.8312 19.1396 8.40349 19.4062 9.00023 19.4062H9.56836L9.16617 19.8587C8.82203 20.2341 8.59425 20.724 8.51642 21.2561C8.43859 21.7883 8.51483 22.3344 8.7339 22.8141C8.95297 23.2938 9.30327 23.6816 9.73313 23.9202C10.163 24.1589 10.6496 24.2358 11.1213 24.1397C10.5013 25.0369 9.6368 25.6807 8.66039 25.9722L5.87132 26.8091C2.92992 27.6993 0.000230789 25.3652 0.000230789 22.1353C-0.000768661 21.6078 0.0603905 21.0826 0.182106 20.5733Z"
              fill="black"
            />
          </svg>
        </ResourceIcon>
        <ResourceText>Report a Case in the House</ResourceText>
      </ResourceButton>
    </ResourceContainer>
  );
};
export default ResourceButtons;
