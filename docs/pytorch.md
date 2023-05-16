---
layout: doc
---

# PyTorch 工程的一般结构

## 代码结构

```explorer
torch_base 
├── checkpoints # 存放模型的地方 
├── data        # 定义各种用于训练测试的dataset 
├── eval.py     # 测试代码
├── loss.py     # 定义loss 
├── metrics.py  # 定义各种评估指标 
├── model       # 定义各种实验中的模型 
├── options.py  # 定义各种实验参数，以命令行形式传入 
├── README.md   # 介绍一下自己的repo 
├── scripts     # 各种训练，测试脚本 
├── train.py    # 训练代码 
└── utils       # 各种工具代码
```