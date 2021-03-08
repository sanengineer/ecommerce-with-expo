import { WHO_AMI_START, WHO_AMI_SUCCESS, WHO_AMI_FAIL } from "../actions";

const initialState = {
  loading: false,
  who_ami: {},
  error: null,
};

export default function whoAmiReducer(state = initialState, action) {
  switch (action.type) {
    case WHO_AMI_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case WHO_AMI_SUCCESS:
      return {
        ...state,
        loading: false,
        who_ami: action.payload.who_ami_success,
      };
    case WHO_AMI_FAIL:
      return {
        ...state,
        loading: false,
        who_ami: {},
        error: action.payload.who_ami_fail,
      };
    default:
      return state;
  }
}
