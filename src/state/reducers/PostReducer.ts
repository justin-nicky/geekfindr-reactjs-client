import {
    CommentPostState,
    DeletePostState,
    GetCommentPostState,
    GetLikesState,
    GetUsersPostState,
    LikePostState,
    PostState,
    TeamJoinRequestState
} from "../../models"

import {
    CreatePostAction,
    DeletePostAction,
    EditPostAction,
    GetFeedAction,
    GetMyPostAction,
    GetPostCommentsAction,
    GetPostLikesAction,
    GetUsersPostsAction,
    PostCommentAction,
    PostLikeAction,
    TeamJoinAction
} from "../action-models"

import {
    CreatePostActionType,
    DeletePostActionType,
    EditPostActionType,
    GetFeedActionType,
    GetMyPostsActionType,
    GetPostCommentsActionType,
    GetPostLikesActionType,
    GetUsersPostsActionType,
    PostCommentActionType,
    PostLikeActionType,
    TeamJoinActionType
} from "../actiontypes";



const initialState = {
    data: [],
    error: null,
    loading: false,
    success: false
}

export const CreatePostReducer = (
    state: PostState = initialState,
    action: CreatePostAction
): PostState => {
    switch (action.type) {
        case CreatePostActionType.CREATE_POST_REQUEST:
            return { ...state, success: false, loading: true, error: null, data: [] }
        case CreatePostActionType.CREATE_POST_SUCCESS:
            return { ...state, success: true, error: null, data: action.payload }
        case CreatePostActionType.CREATE_POST_FAIL:
            return { ...state, loading: false, error: action.payload, data: [] }
        default:
            return state;
    }
}

export const GetFeedReducer = (
    state: PostState = initialState,
    action: GetFeedAction
): PostState => {
    switch (action.type) {
        case GetFeedActionType.GET_FEED_REQUEST:
            return { ...state, loading: true, error: null, data: [] }
        case GetFeedActionType.GET_FEED_SUCCESS:
            return { ...state, loading: false, error: null, data: action.payload }
        case GetFeedActionType.GET_FEED_FAIL:
            return { ...state, loading: false, error: action.payload, data: [] }
        default:
            return state;
    }
}

export const GetMyPostReducer = (
    state: PostState = initialState,
    action: GetMyPostAction
): PostState => {
    switch (action.type) {
        case GetMyPostsActionType.GET_MYPOST_REQUEST:
            return { ...state, success: false, loading: true, error: null, data: [] }
        case GetMyPostsActionType.GET_MYPOST_SUCCESS:
            return { ...state, success: true, loading: false, error: null, data: action.payload }
        case GetMyPostsActionType.GET_MYPOST_FAIL:
            return { ...state, loading: false, error: action.payload, data: [] }
        default:
            return state;
    }
}

export const EditPostReducer = (
    state: PostState = initialState,
    action: EditPostAction
): PostState => {
    switch (action.type) {
        case EditPostActionType.EDIT_POST_REQUEST:
            return { ...state, loading: true, error: null, data: [] }
        case EditPostActionType.EDIT_POST_SUCCESS:
            return { ...state, success: true, loading: false, error: null, data: action.payload }
        case EditPostActionType.EDIT_POST_FAIL:
            return { ...state, loading: false, error: action.payload, data: [] }
        default:
            return state;
    }
}

export const DeletePostReducer = (
    state: DeletePostState = initialState,
    action: DeletePostAction
): DeletePostState => {
    switch (action.type) {
        case DeletePostActionType.DELETE_POST_REQUEST:
            return { ...state, loading: true, error: null }
        case DeletePostActionType.DELETE_POST_SUCCESS:
            return { ...state, success: true, error: null, data: action.payload }
        case DeletePostActionType.DELETE_POST_FAIL:
            return { ...state, loading: false, success: false, error: action.payload, data: [] }
        default:
            return state;
    }
}

export const GetLikesReducer = (
    state: GetLikesState = initialState,
    action: GetPostLikesAction
): GetLikesState => {
    switch (action.type) {
        case GetPostLikesActionType.GET_LIKES_REQUEST:
            return { ...state, loading: true, error: null }
        case GetPostLikesActionType.GET_LIKES_SUCCESS:
            return { ...state, success: true, error: null, data: action.payload }
        case GetPostLikesActionType.GET_LIKES_FAIL:
            return { ...state, loading: false, success: false, error: action.payload, data: [] }
        default:
            return state;
    }
}

export const GetCommentsReducer = (
    state: GetCommentPostState = initialState,
    action: GetPostCommentsAction
): GetCommentPostState => {
    switch (action.type) {
        case GetPostCommentsActionType.GET_COMMENTS_REQUEST:
            return { ...state, loading: true, error: null }
        case GetPostCommentsActionType.GET_COMMENTS_SUCCESS:
            return { ...state, success: true, error: null, data: action.payload }
        case GetPostCommentsActionType.GET_COMMENTS_FAIL:
            return { ...state, loading: false, success: false, error: action.payload, data: [] }
        default:
            return state;
    }
}

export const PostLikeReducer = (
    state: LikePostState = initialState,
    action: PostLikeAction
): LikePostState => {
    switch (action.type) {
        case PostLikeActionType.POST_LIKE_REQUEST:
            return { ...state, loading: true, error: null }
        case PostLikeActionType.POST_LIKE_SUCCESS:
            return { ...state, success: true, loading: false, error: null, data: action.payload }
        case PostLikeActionType.POST_LIKE_FAIL:
            return { ...state, loading: false, success: false, error: action.payload, data: [] }
        default:
            return state;
    }
}

export const PostCommentReducer = (
    state: CommentPostState = initialState,
    action: PostCommentAction
): CommentPostState => {
    switch (action.type) {
        case PostCommentActionType.POST_COMMENT_REQUEST:
            return { ...state, success: false, loading: true, error: null }
        case PostCommentActionType.POST_COMMENT_SUCCESS:
            return { ...state, success: true, error: null, data: action.payload }
        case PostCommentActionType.POST_COMMENT_FAIL:
            return { ...state, loading: false, success: false, error: action.payload, data: [] }
        default:
            return state;
    }
}

export const GetUsersPostsReducer = (
    state: GetUsersPostState = initialState,
    action: GetUsersPostsAction
): GetUsersPostState => {
    switch (action.type) {
        case GetUsersPostsActionType.GET_USERSPOST_REQUEST:
            return { ...state, success: false, loading: true, error: null, data: [] }
        case GetUsersPostsActionType.GET_USERSPOST_SUCCESS:
            return { ...state, success: true, loading: false, error: null, data: action.payload }
        case GetUsersPostsActionType.GET_USERSPOST_FAIL:
            return { ...state, loading: false, error: action.payload, data: [] }
        default:
            return state;
    }
}

export const TeamJoinRequestReducer = (
    state: TeamJoinRequestState = initialState,
    action: TeamJoinAction
): TeamJoinRequestState => {
    switch (action.type) {
        case TeamJoinActionType.TEAM_JOIN_REQUEST:
            return { ...state, loading: true, error: null }
        case TeamJoinActionType.TEAM_JOIN_SUCCESS:
            return { ...state, success: true, loading: false, error: null, data: action.payload }
        case TeamJoinActionType.TEAM_JOIN_FAIL:
            return { ...state, loading: false, success: false, error: action.payload, data: [] }
        default:
            return state;
    }
}