export interface Tool {
  slug:        string
  name:        string
  description: string
  category:    string
  status:      'live' | 'coming-soon'
}

export interface Project {
  slug:        string
  name:        string
  type:        string
  description: string
  tags:        string[]
  emoji:       string
  thumbBg:     string
}

export interface Lead {
  name:    string
  email:   string
  message: string
}

export interface ToolUsage {
  toolSlug:  string
  inputText: string
  ipHash?:   string
}
