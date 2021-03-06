/*
 *  Copyright (c) 2015 Cryptonomex, Inc., and contributors.
 *
 *  The MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

import LoginPageConstants from "../constants/LoginPage";

/**
 * Login Page Reducer is used to controlling login in an application
 * Initial State
 * status - Login form: Button state
 * errors - Login form: Common validation errors
 * accountForLogin - Login form: If the account exists and it's valid, then we work with it
 * @type {{status: string, errors: Array, accountForLogin: null}}
 */
let defaultState = {
    status: 'default',
    errors: [],
    accountForLogin: null
};

export default function (state = defaultState, action) {
    switch (action.type) {
        /**
         * Login form: Setting button state
         */
        case LoginPageConstants.LOGIN_SET_STATUS:
            return Object.assign({}, state, {
                status: action.status
            });
        /**
         * Login form: Set up a login account
         */
        case LoginPageConstants.LOGIN_SET_ACCOUNT_FOR_LOGIN:
            return Object.assign({}, state, {
                accountForLogin: action.accountForLogin
            });
        /**
         * Login form: Setting Common validation errors
         */
        case LoginPageConstants.LOGIN_SET_LOGIN_ERRORS:
            return Object.assign({}, state, {
                errors: action.errors
            });
        default:
            /**
             * We return the previous state in the default case
             */
            return state
    }

};