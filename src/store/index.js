
import Vue from 'vue';
import Vuex from 'vuex';

import { users } from './userActionAndMutations';
import { alert } from './alertActionAndMutation'
import { account } from './accountActionAndMutation'
import {authentication} from './authenticationActionAndMutations'
import { FormRadioPlugin } from 'bootstrap-vue';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
		users,
		alert,
		account,
		authentication
    }
});