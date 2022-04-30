import React, { FC } from 'react'

export interface Props {}

const Required: FC<Props> = () => {
  return <span className="required">*</span>
}

export default Required
