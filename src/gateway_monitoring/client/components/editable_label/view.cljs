(ns gateway_monitoring.client.components.editable-label.view
    (:require
            [om.core :as om :include-macros true]
            [om-tools.dom :as d :include-macros true]))

(defn display [visible? css-classes] (if visible? (:visible-element css-classes) (:invisible-element css-classes)))

(defn label [{:keys [display-text edit-text editing? editing?-changed text-changed css-classes]} owner]
  (reify
    om/IDidUpdate
      (did-update [this prev-props prev-state]
        ; put the focus to input box when editing
        (when editing?
          (let [input (om/get-node owner "input")]
            (.focus input)
            (.select input))))
    om/IRenderState
      (render-state [this state]
        (d/div #js { :className (:parent-element css-classes)}
            (d/div #js { :className (display (not editing?) css-classes)}
              (d/div #js {:onClick #(editing?-changed true)} display-text))
            (d/input #js {
                          :ref "input"
                          :className (display editing? css-classes)
                          :onChange #(text-changed (.. % -target -value))
                          :onKeyDown #(when (= (.-key %) "Enter") (editing?-changed false))
                          :onBlur #(when editing? (editing?-changed false))
                          :value edit-text})))))
