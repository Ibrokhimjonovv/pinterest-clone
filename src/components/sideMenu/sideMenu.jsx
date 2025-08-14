"use client"

import React, { useContext } from 'react';
import Link from 'next/link';
import "./sideMenu.scss";
import { Context } from '@/context/context';

const SideMenu = () => {
    const { isModal } = useContext(Context)
    return (
        <div className={`s_m_fix ${isModal ? "active" : ""}`}>
            <ul className={`men_list_1`}>
                <li>
                    <Link href="/" className='logo'>
                        <svg
                            aria-hidden="true"
                            aria-label=""
                            height="20"
                            role="img"
                            viewBox="0 0 24 24"
                            width="20"
                        >
                            <path d="M7.54 23.15q-.2-2.05.26-3.93L9 14.04a7 7 0 0 1-.35-2.07c0-1.68.81-2.88 2.09-2.88.88 0 1.53.62 1.53 1.8q0 .57-.23 1.28l-.52 1.72q-.15.5-.15.92c0 1.2.91 1.87 2.08 1.87 2.09 0 3.57-2.16 3.57-4.96 0-3.12-2.04-5.12-5.05-5.12-3.36 0-5.49 2.19-5.49 5.24 0 1.22.38 2.36 1.11 3.14-.24.41-.5.48-.88.48-1.2 0-2.34-1.69-2.34-4 0-4 3.2-7.17 7.68-7.17 4.7 0 7.66 3.29 7.66 7.33s-2.88 7.15-5.98 7.15a3.8 3.8 0 0 1-3.06-1.48l-.62 2.5a11 11 0 0 1-1.62 3.67A11.98 11.98 0 0 0 24 12a11.99 11.99 0 1 0-24 0 12 12 0 0 0 7.54 11.15"></path>
                        </svg>

                        <span className="popupcha">
                            Home
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <div
                            style={{
                                backgroundSize: 'cover',
                                backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'20\' height=\'20\' viewBox=\'0 0 24 24\' fill=\'none\'%3E%3Cpath fill-rule=\'evenodd\' clip-rule=\'evenodd\' d=\'M11.3217 0.307444C11.7345 0.0407477 12.2654 0.0407477 12.6782 0.307444L22.3616 6.56277C22.7181 6.79303 22.9334 7.1884 22.9334 7.61275V23.25H1.06653V7.61275C1.06653 7.1884 1.28181 6.79303 1.63826 6.56277L11.3217 0.307444ZM3.56653 8.2934V20.75H20.4334V8.2934L11.9999 2.84555L3.56653 8.2934Z\' fill=\'black\'/%3E%3Cpath fill-rule=\'evenodd\' clip-rule=\'evenodd\' d=\'M14.25 16.0469V20.5H14.2344V23H16.75V16.0469C16.75 13.4235 14.6234 11.2969 12 11.2969C9.37665 11.2969 7.25 13.4235 7.25 16.0469V23H9.75V20.5V20.1094V16.0469C9.75 14.8042 10.7574 13.7969 12 13.7969C13.2426 13.7969 14.25 14.8042 14.25 16.0469Z\' fill=\'black\'/%3E%3C/svg%3E")',
                                height: '20px',
                                width: '20px'
                            }}
                        />
                        <span className="popupcha">
                            Home
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href="/add">
                        <div
                            style={{
                                backgroundSize: 'cover',
                                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 24 24\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath fill-rule=\'evenodd\' clip-rule=\'evenodd\' d=\'M19 3.5H5C4.17157 3.5 3.5 4.17157 3.5 5V19C3.5 19.8284 4.17157 20.5 5 20.5H19C19.8284 20.5 20.5 19.8284 20.5 19V5C20.5 4.17157 19.8284 3.5 19 3.5ZM5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5Z\' fill=\'%23111111\'/%3E%3Cpath d=\'M13.25 7C13.25 6.30964 12.6904 5.75 12 5.75C11.3096 5.75 10.75 6.30964 10.75 7V10.75H7C6.30964 10.75 5.75 11.3096 5.75 12C5.75 12.6904 6.30964 13.25 7 13.25H10.75V17C10.75 17.6904 11.3096 18.25 12 18.25C12.6904 18.25 13.25 17.6904 13.25 17V13.25H17C17.6904 13.25 18.25 12.6904 18.25 12C18.25 11.3096 17.6904 10.75 17 10.75H13.25V7Z\' fill=\'%23111111\'/%3E%3C/svg%3E")',
                                height: '20px',
                                width: '20px'
                            }}
                        />
                        <span className="popupcha">
                            Create
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href="/notifications">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.5 14.227V7C16.5 4.51471 14.4853 2.5 12 2.5C9.51471 2.5 7.5 4.51471 7.5 7V14.227L6.73561 14.9643C6.26116 15.422 5.84638 15.9379 5.5032 16.5H18.4968C18.1536 15.9379 17.7388 15.422 17.2644 14.9643L16.5 14.227ZM21.3013 16.5C21.6365 17.2867 21.8745 18.1248 22 19H2C2.12546 18.1248 2.36354 17.2867 2.69865 16.5C3.23694 15.2362 4.0256 14.1049 5 13.165V7C5 3.134 8.134 0 12 0C15.866 0 19 3.134 19 7V13.165C19.9744 14.1049 20.7631 15.2362 21.3013 16.5ZM15 20.9998H9C9 21.1702 9.01421 21.3373 9.0415 21.5C9.18134 22.3334 9.66468 23.0501 10.341 23.4998C10.8161 23.8157 11.3866 23.9998 12 23.9998C12.6134 23.9998 13.1839 23.8157 13.659 23.4998C14.3353 23.0501 14.8187 22.3334 14.9585 21.5C14.9858 21.3373 15 21.1702 15 20.9998Z" fill="#111111" />
                        </svg>
                        <span className="popupcha">
                            Updates
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <div
                            style={{
                                backgroundSize: 'cover',
                                backgroundImage: `url("data:image/svg+xml,<svg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><g clip-path='url(%23clip0_800_18532)'><rect width='24' height='24' fill='none'/><path d='M4.6831 18.2737L4.84947 17.6551L4.44456 17.1588C3.07314 15.4778 2.25 13.3365 2.25 11C2.25 5.61536 6.61536 1.25 12 1.25C17.3846 1.25 21.75 5.61536 21.75 11C21.75 16.3846 17.3846 20.75 12 20.75C10.6917 20.75 9.44625 20.4881 8.30368 20.0202L7.75509 19.7956L7.23401 20.0782L3.67907 22.0065L4.6831 18.2737Z' stroke='%23111111' stroke-width='2.5'/><circle cx='6.99219' cy='11.0078' r='1.5' fill='%23111111'/><path d='M13.4961 11.0078C13.4961 11.8362 12.8245 12.5078 11.9961 12.5078C11.1677 12.5078 10.4961 11.8362 10.4961 11.0078C10.4961 10.1794 11.1677 9.50781 11.9961 9.50781C12.8245 9.50781 13.4961 10.1794 13.4961 11.0078Z' fill='%23111111'/><circle cx='17' cy='11.0078' r='1.5' fill='%23111111'/></g><defs><clipPath id='clip0_800_18532'><rect width='24' height='24' fill='white'/></clipPath></defs></svg>")`,
                                height: '20px',
                                width: '20px'
                            }}
                        />
                        <span className="popupcha">
                            Messages
                        </span>
                    </Link>
                </li>
            </ul>
            <ul className={`men_list_2`}>
                <li>
                    <Link href="">
                        <div
                            style={{
                                backgroundSize: 'cover',
                                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 24 24\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg clip-path=\'url(%23clip0_449_32461)\'%3E%3Cpath fill-rule=\'evenodd\' clip-rule=\'evenodd\' d=\'M4 7.45081V16.5492L12 21.1206L20 16.5492V7.45081L12 2.87938L4 7.45081ZM12 0L1.5 6V18L12 24L22.5 18V6L12 0Z\' fill=\'%23111111\'/%3E%3Cpath fill-rule=\'evenodd\' clip-rule=\'evenodd\' d=\'M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM6.5 12C6.5 8.96243 8.96243 6.5 12 6.5C15.0376 6.5 17.5 8.96243 17.5 12C17.5 15.0376 15.0376 17.5 12 17.5C8.96243 17.5 6.5 15.0376 6.5 12Z\' fill=\'%23111111\'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id=\'clip0_449_32461\'%3E%3Crect width=\'24\' height=\'24\' fill=\'white\'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E")',
                                height: '20px',
                                width: '20px'
                            }}
                        />

                        <span className="popupcha">
                            Options
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default SideMenu;